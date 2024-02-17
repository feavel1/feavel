import md5 from 'crypto-js/md5';

class EpayCore {
	private pid: string;
	private key: string;
	private submit_url: string;
	private mapi_url: string;
	private api_url: string;

	constructor(config: { pid: string; key: string; apiurl: string }) {
		this.pid = config.pid;
		this.key = config.key;
		this.submit_url = config.apiurl + 'submit.php';
		this.mapi_url = config.apiurl + 'mapi.php';
		this.api_url = config.apiurl + 'api.php';
	}

	// 发起支付（页面跳转）
	public pagePay(param_tmp: any, button: string = '正在跳转'): string {
		const param = this.buildRequestParam(param_tmp);
		let html = '<form id="dopay" action="' + this.submit_url + '" method="post">';
		for (const [k, v] of Object.entries(param)) {
			html += '<input type="hidden" name="' + k + '" value="' + v + '"/>';
		}
		html +=
			'<input type="submit" value="' +
			button +
			'"></form><script>document.getElementById("dopay").submit();</script>';
		return html;
	}

	// 发起支付（获取链接）
	public getPayLink(param_tmp: any): string {
		const param = this.buildRequestParam(param_tmp);
		const url = `${this.submit_url}?${new URLSearchParams(param).toString()}`;
		return url;
	}

	// 发起支付（API接口）
	public async apiPay(param_tmp: any): Promise<any> {
		const param = this.buildRequestParam(param_tmp);

		const response = await this.getHttpResponse(
			this.mapi_url,
			new URLSearchParams(param).toString()
		);
		const arr = JSON.parse(response);
		return arr;
	}

	// 异步回调验证
	public verifyNotify(param_tmp: URLSearchParams): boolean {
		if (!param_tmp) return false;
		const params = new URLSearchParams(param_tmp);
		const paramObject = Object.fromEntries(params);
		if (Object.keys(paramObject).length === 0) return false;
		const sign = this.getSign(paramObject);
		const signResult = sign === paramObject.sign ? true : false;
		return signResult;
	}

	// 同步回调验证
	public verifyReturn(param_tmp: URLSearchParams): boolean {
		if (!param_tmp) return false;
		const params = new URLSearchParams(param_tmp);
		const paramObject = Object.fromEntries(params);
		if (Object.keys(paramObject).length === 0) return false;
		const sign = this.getSign(paramObject);
		const signResult = sign === paramObject.sign ? true : false;
		return signResult;
	}

	// 查询订单支付状态
	public async orderStatus(trade_no: string): Promise<boolean> {
		const result = await this.queryOrder(trade_no);
		return result.status === 1 ? true : false;
	}

	// 查询订单
	public async queryOrder(trade_no: string): Promise<any> {
		const url =
			this.api_url + '?act=order&pid=' + this.pid + '&key=' + this.key + '&trade_no=' + trade_no;
		const response = await this.getHttpResponse(url);
		const arr = JSON.parse(response);
		return arr;
	}

	// 订单退款
	public async refund(trade_no: string, money: number): Promise<any> {
		const url = this.api_url + '?act=refund';
		const post =
			'pid=' + this.pid + '&key=' + this.key + '&trade_no=' + trade_no + '&money=' + money;
		const response = await this.getHttpResponse(url, post);
		const arr = JSON.parse(response);
		return arr;
	}

	public buildRequestParam(param: any): any {
		const mysign = this.getSign(param);
		param.sign = mysign;
		param.sign_type = 'MD5';
		return param;
	}

	// 计算签名
	public getSign(param: any): any {
		const keys = Object.keys(param).sort();
		let signstr = '';
		for (const k of keys) {
			const v = param[k];
			if (k !== 'sign' && k !== 'sign_type' && v !== '') {
				signstr += k + '=' + v + '&';
			}
		}
		signstr = signstr.slice(0, -1) + this.key;
		const sign = md5(signstr).toString();
		return sign;
	}

	// 请求外部资源
	private async getHttpResponse(
		url: string,
		post: string | boolean = false,
		timeout: number = 10
	): Promise<string> {
		const fullUrl = `${url}?${post}`;
		const httpheader: Record<string, string> = {
			Accept: '*/*',
			'Accept-Language': 'zh-CN,zh;q=0.8',
			Connection: 'close'
		};
		const options: any = {
			method: 'GET',
			headers: httpheader, // Pass the object instead of an array
			timeout: timeout * 1000
		};
		if (post) {
			options.method = 'POST';
		}
		const response = await fetch(fullUrl, options);
		const responseData = await response.text();
		return responseData;
	}
}

export default EpayCore;

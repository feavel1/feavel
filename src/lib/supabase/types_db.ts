export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
	public: {
		Tables: {
			chat_conversations: {
				Row: {
					created_at: string;
					id: number;
					name: string | null;
				};
				Insert: {
					created_at?: string;
					id?: number;
					name?: string | null;
				};
				Update: {
					created_at?: string;
					id?: number;
					name?: string | null;
				};
				Relationships: [];
			};
			chat_messages: {
				Row: {
					conversation_id: number | null;
					created_at: string;
					id: number;
					sent_from: string | null;
					text: string | null;
				};
				Insert: {
					conversation_id?: number | null;
					created_at?: string;
					id?: number;
					sent_from?: string | null;
					text?: string | null;
				};
				Update: {
					conversation_id?: number | null;
					created_at?: string;
					id?: number;
					sent_from?: string | null;
					text?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'chat_messages_conversation_id_fkey';
						columns: ['conversation_id'];
						isOneToOne: false;
						referencedRelation: 'chat_conversations';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'message_sent_from_fkey';
						columns: ['sent_from'];
						isOneToOne: false;
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			digital_order: {
				Row: {
					conversation_id: number | null;
					created_at: string;
					description: string | null;
					id: number;
					purchase_id: string | null;
					service_id: number | null;
					user_id: string | null;
				};
				Insert: {
					conversation_id?: number | null;
					created_at?: string;
					description?: string | null;
					id?: number;
					purchase_id?: string | null;
					service_id?: number | null;
					user_id?: string | null;
				};
				Update: {
					conversation_id?: number | null;
					created_at?: string;
					description?: string | null;
					id?: number;
					purchase_id?: string | null;
					service_id?: number | null;
					user_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'digital_order_conversation_id_fkey';
						columns: ['conversation_id'];
						isOneToOne: false;
						referencedRelation: 'chat_conversations';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'digital_order_purchase_id_fkey';
						columns: ['purchase_id'];
						isOneToOne: false;
						referencedRelation: 'digital_purchase';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'digital_order_service_id_fkey';
						columns: ['service_id'];
						isOneToOne: false;
						referencedRelation: 'services';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'digital_order_user_id_fkey';
						columns: ['user_id'];
						isOneToOne: false;
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			digital_purchase: {
				Row: {
					created_at: string;
					id: string;
					payment_method: string | null;
					payment_status: Database['public']['Enums']['purchase_status'];
					payment_status_time: string | null;
					price: number;
					service_id: number;
					trade_no: string | null;
					user_id: string;
				};
				Insert: {
					created_at?: string;
					id: string;
					payment_method?: string | null;
					payment_status: Database['public']['Enums']['purchase_status'];
					payment_status_time?: string | null;
					price: number;
					service_id: number;
					trade_no?: string | null;
					user_id: string;
				};
				Update: {
					created_at?: string;
					id?: string;
					payment_method?: string | null;
					payment_status?: Database['public']['Enums']['purchase_status'];
					payment_status_time?: string | null;
					price?: number;
					service_id?: number;
					trade_no?: string | null;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'digital_purchase_service_id_fkey';
						columns: ['service_id'];
						isOneToOne: false;
						referencedRelation: 'services';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'digital_purchase_user_id_fkey';
						columns: ['user_id'];
						isOneToOne: false;
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			post_tags: {
				Row: {
					created_at: string;
					id: number;
					tag_name: string;
				};
				Insert: {
					created_at?: string;
					id?: number;
					tag_name: string;
				};
				Update: {
					created_at?: string;
					id?: number;
					tag_name?: string;
				};
				Relationships: [];
			};
			posts: {
				Row: {
					content: Json | null;
					created_at: string;
					id: number;
					post_cover: string | null;
					post_views: number;
					public_visibility: boolean | null;
					title: string | null;
					user_id: string | null;
				};
				Insert: {
					content?: Json | null;
					created_at?: string;
					id?: number;
					post_cover?: string | null;
					post_views?: number;
					public_visibility?: boolean | null;
					title?: string | null;
					user_id?: string | null;
				};
				Update: {
					content?: Json | null;
					created_at?: string;
					id?: number;
					post_cover?: string | null;
					post_views?: number;
					public_visibility?: boolean | null;
					title?: string | null;
					user_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'posts_user_id_fkey';
						columns: ['user_id'];
						isOneToOne: false;
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			posts_tags_rel: {
				Row: {
					id: number;
					post_id: number | null;
					tag_id: number | null;
				};
				Insert: {
					id?: number;
					post_id?: number | null;
					tag_id?: number | null;
				};
				Update: {
					id?: number;
					post_id?: number | null;
					tag_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: 'posts_tags_rel_post_id_fkey';
						columns: ['post_id'];
						isOneToOne: false;
						referencedRelation: 'posts';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'posts_tags_rel_tag_id_fkey';
						columns: ['tag_id'];
						isOneToOne: false;
						referencedRelation: 'post_tags';
						referencedColumns: ['id'];
					}
				];
			};
			services: {
				Row: {
					cover_url: string | null;
					created_at: string;
					created_by: number | null;
					description: string;
					enabled: boolean;
					highlights: Json;
					id: number;
					name: string;
					price: number;
					status: Database['public']['Enums']['status'] | null;
				};
				Insert: {
					cover_url?: string | null;
					created_at?: string;
					created_by?: number | null;
					description: string;
					enabled?: boolean;
					highlights: Json;
					id?: number;
					name: string;
					price: number;
					status?: Database['public']['Enums']['status'] | null;
				};
				Update: {
					cover_url?: string | null;
					created_at?: string;
					created_by?: number | null;
					description?: string;
					enabled?: boolean;
					highlights?: Json;
					id?: number;
					name?: string;
					price?: number;
					status?: Database['public']['Enums']['status'] | null;
				};
				Relationships: [
					{
						foreignKeyName: 'services_created_by_fkey';
						columns: ['created_by'];
						isOneToOne: false;
						referencedRelation: 'studios';
						referencedColumns: ['id'];
					}
				];
			};
			services_category: {
				Row: {
					category_name: string | null;
					created_at: string;
					id: number;
				};
				Insert: {
					category_name?: string | null;
					created_at?: string;
					id?: number;
				};
				Update: {
					category_name?: string | null;
					created_at?: string;
					id?: number;
				};
				Relationships: [];
			};
			services_category_rel: {
				Row: {
					category_id: number | null;
					created_at: string;
					id: number;
					service_id: number | null;
				};
				Insert: {
					category_id?: number | null;
					created_at?: string;
					id?: number;
					service_id?: number | null;
				};
				Update: {
					category_id?: number | null;
					created_at?: string;
					id?: number;
					service_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: 'services_category_rel_category_id_fkey';
						columns: ['category_id'];
						isOneToOne: false;
						referencedRelation: 'services_category';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'services_category_rel_service_id_fkey';
						columns: ['service_id'];
						isOneToOne: false;
						referencedRelation: 'services';
						referencedColumns: ['id'];
					}
				];
			};
			studios: {
				Row: {
					attachment: string | null;
					contact_phone: number;
					created_at: string;
					description: string;
					id: number;
					name: string;
					salary_expectation: string;
					status: Database['public']['Enums']['status'];
					user_id: string;
					withdraw_method: string;
					withdraw_number: string;
				};
				Insert: {
					attachment?: string | null;
					contact_phone: number;
					created_at?: string;
					description: string;
					id?: number;
					name: string;
					salary_expectation: string;
					status?: Database['public']['Enums']['status'];
					user_id: string;
					withdraw_method: string;
					withdraw_number: string;
				};
				Update: {
					attachment?: string | null;
					contact_phone?: number;
					created_at?: string;
					description?: string;
					id?: number;
					name?: string;
					salary_expectation?: string;
					status?: Database['public']['Enums']['status'];
					user_id?: string;
					withdraw_method?: string;
					withdraw_number?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'studios_user_id_fkey';
						columns: ['user_id'];
						isOneToOne: true;
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
			users: {
				Row: {
					avatar_url: string | null;
					birthday: string | null;
					description: string | null;
					full_name: string | null;
					id: string;
					username: string | null;
				};
				Insert: {
					avatar_url?: string | null;
					birthday?: string | null;
					description?: string | null;
					full_name?: string | null;
					id: string;
					username?: string | null;
				};
				Update: {
					avatar_url?: string | null;
					birthday?: string | null;
					description?: string | null;
					full_name?: string | null;
					id?: string;
					username?: string | null;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			content_string: {
				Args: {
					searchparams: string;
				};
				Returns: {
					id: number;
					title: string;
					created_at: string;
				}[];
			};
			update_views: {
				Args: {
					page_id: number;
				};
				Returns: undefined;
			};
		};
		Enums: {
			purchase_status:
				| 'created'
				| 'canceled'
				| 'paid'
				| 'finished'
				| 'refund_start'
				| 'refund_finished';
			status: 'applied' | 'approved' | 'incomplete' | 'disabled' | 'blocked';
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (PublicSchema['Tables'] & PublicSchema['Views'])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
				Database[PublicTableNameOrOptions['schema']]['Views'])
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
			Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
			Row: infer R;
		}
		? R
		: never
	: PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
		? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
				Row: infer R;
			}
			? R
			: never
		: never;

export type TablesInsert<
	PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Insert: infer I;
		}
		? I
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema['Tables']
		? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
				Insert: infer I;
			}
			? I
			: never
		: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Update: infer U;
		}
		? U
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema['Tables']
		? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
				Update: infer U;
			}
			? U
			: never
		: never;

export type Enums<
	PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
		: never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
	: PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
		? PublicSchema['Enums'][PublicEnumNameOrOptions]
		: never;

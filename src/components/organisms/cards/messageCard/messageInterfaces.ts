export interface Attachment {
  id: string;
  name: string;
  created_at: string;
  size: number;
  mime_type: string;
  url: string;
  resource_type: string;
}

export interface MessageInterface {
  id: string;
  title: string;
  content: string;
  interest_count: number;
  is_interested: boolean;
  attachments: [
    {
      id: string;
      name: string;
      created_at: string;
      size: number;
      mime_type: string;
      url: string;
      resource_type: string;
    }
  ];
}

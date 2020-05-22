export interface IToastParams {
    type: string;
    text: string;
}

export enum ToasterTypes {
    DEFAULT = 'default',
    WARNING = 'warning',
    DANGER = 'danger'
}

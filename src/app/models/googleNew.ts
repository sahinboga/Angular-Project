export interface GoogleNew {
    rss: IrssObject;
}

export interface IrssObject {
    $: any;
    channel: Array<IRssChannel>;
}

export interface IRssChannel {
    item: Array<IRssItem>;
}

export interface IRssItem {
    description: string;
    guid: any;
    link: string;
    enclosure: any;
    title: string;
}
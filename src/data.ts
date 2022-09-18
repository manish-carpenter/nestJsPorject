export enum ReportType {
    INCOME = 'income',
    EXPENSE = 'expense'
}

export const data: Data = {
    report: [
        {
            id: 'uuid1',
            source: 'youtube',
            amount: 123,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: 'uuid2',
            source: 'google',
            amount: 345,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        },
        {
            id: 'uuid3',
            source: 'youtube',
            amount: 123,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        }
    ],
};

interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    }[];
}
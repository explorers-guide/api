export interface PatchAccountInput {
    user?: {
        name?: string;
        nickname?: string;
        email?: string;
        password?: string;
    };
}

export interface PatchAccount {
    execute(sellerId: string, parms: PatchAccountInput): Promise<boolean>;
}

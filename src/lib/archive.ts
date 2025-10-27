export const ARCHIVE_COLLECTIONS = [
    "thoughts",
    "notes",
    "cheat-sheets",
    "logs",
] as const;

export type ArchiveCollection = (typeof ARCHIVE_COLLECTIONS)[number];

export const ARCHIVE_LABELS: Record<ArchiveCollection, string> = {
    thoughts: "Thoughts",
    notes: "Field Notes",
    "cheat-sheets": "Cheat-sheets",
    logs: "Project Logs",
};

export type ArchiveEntryData = {
    title: string;
    dek?: string;
    date?: Date;
    updated?: Date;
};

export const isArchiveCollection = (
    value: string,
): value is ArchiveCollection =>
    (ARCHIVE_COLLECTIONS as readonly string[]).includes(value);

export const getPrimaryDate = (data: ArchiveEntryData) => data.date ?? data.updated;

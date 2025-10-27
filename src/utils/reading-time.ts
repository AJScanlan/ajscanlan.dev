/**
 * Calculate reading time for text content
 * @param text - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 wpm)
 * @returns Reading time in minutes (rounded up)
 */
export function calculateReadingTime(text: string, wordsPerMinute = 200): number {
    // Remove code blocks (both ``` and indented)
    const withoutCodeBlocks = text
        .replace(/```[\s\S]*?```/g, '')
        .replace(/^(    |\t).*$/gm, '');
    
    // Remove HTML/JSX tags
    const withoutTags = withoutCodeBlocks.replace(/<[^>]*>/g, '');
    
    // Remove markdown syntax but keep the text
    const withoutMarkdown = withoutTags
        .replace(/!\[.*?\]\(.*?\)/g, '') // Images
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Links - keep text
        .replace(/^#{1,6}\s+/gm, '') // Headers
        .replace(/[*_~`]/g, '') // Emphasis markers
        .replace(/^\s*[-+*]\s+/gm, '') // List markers
        .replace(/^\s*\d+\.\s+/gm, ''); // Numbered lists
    
    // Count words (split by whitespace and filter empty strings)
    const words = withoutMarkdown
        .split(/\s+/)
        .filter(word => word.length > 0);
    
    const wordCount = words.length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    
    // Return at least 1 minute
    return Math.max(1, minutes);
}

/**
 * Format reading time for display
 * @param minutes - Reading time in minutes
 * @returns Formatted string (e.g., "5 min read")
 */
export function formatReadingTime(minutes: number): string {
    return `${minutes} min read`;
}

// utils/contentCustomization.ts
export const customizeContent = (content: string, tone: string, style: string, audience: string) => {
    // Customize content based on user selection
    let customizedContent = content;

    if (tone === 'formal') {
        customizedContent = `In a formal tone: ${customizedContent}`;
    } else if (tone === 'casual') {
        customizedContent = `In a casual tone: ${customizedContent}`;
    }

    if (style === 'creative') {
        customizedContent += ' Written in a creative style.';
    } else if (style === 'professional') {
        customizedContent += ' Written in a professional style.';
    }

    if (audience === 'business') {
        customizedContent += ' Suitable for a business audience.';
    } else if (audience === 'students') {
        customizedContent += ' Suitable for a student audience.';
    }

    return customizedContent;
};

// components/ui/ContentCustomizationForm.tsx
import { useState } from 'react';

interface ContentCustomizationFormProps {
    onCustomize: (tone: string, style: string, audience: string) => void;
}

const ContentCustomizationForm: React.FC<ContentCustomizationFormProps> = ({ onCustomize }) => {
    const [tone, setTone] = useState('formal');
    const [style, setStyle] = useState('professional');
    const [audience, setAudience] = useState('business');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCustomize(tone, style, audience);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Tone:
                <select value={tone} onChange={(e) => setTone(e.target.value)}>
                    <option value="formal">Formal</option>
                    <option value="casual">Casual</option>
                </select>
            </label>
            <label>
                Style:
                <select value={style} onChange={(e) => setStyle(e.target.value)}>
                    <option value="professional">Professional</option>
                    <option value="creative">Creative</option>
                </select>
            </label>
            <label>
                Audience:
                <select value={audience} onChange={(e) => setAudience(e.target.value)}>
                    <option value="business">Business</option>
                    <option value="students">Students</option>
                </select>
            </label>
            <button type="submit">Customize</button>
        </form>
    );
};

export default ContentCustomizationForm;

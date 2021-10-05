import 'tailwindcss/tailwind.css';
import { ReactElement } from 'react';

export default function AnExampleBlock(): ReactElement {
    return (
        <div>
            <span className="text-green-500 underline">A custom block in blue and underlined</span>
        </div>
    );
}

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HeroText from '../HeroText';
import { vehicleShowcaseText } from '../../../data/data';

jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }: { children: React.ReactNode;[key: string]: unknown }) => {
            const filteredProps = { ...props };
            delete filteredProps.initial;
            delete filteredProps.whileInView;
            delete filteredProps.viewport;
            delete filteredProps.transition;

            return <div {...(filteredProps as React.HTMLAttributes<HTMLDivElement>)}>{children}</div>;
        },
    },
}));

describe('HeroText', () => {
    it('renders the hero heading correctly', () => {
        render(<HeroText />);

        const heading = screen.getByRole('heading');
        expect(heading).toHaveTextContent(vehicleShowcaseText.heroHeadingLine1);
        expect(heading).toHaveTextContent(vehicleShowcaseText.heroHighlight);
        expect(heading).toHaveTextContent(vehicleShowcaseText.heroHeadingLine2);
    });

    it('applies the correct styling classes', () => {
        render(<HeroText />);
        const container = screen.getByRole('heading').parentElement?.parentElement;
        expect(container).toHaveClass('relative', 'lg:h-screen', 'flex', 'items-center', 'justify-center');
    });

    it('renders the highlighted text with correct styling', () => {
        render(<HeroText />);
        const highlightedText = screen.getByText(vehicleShowcaseText.heroHighlight);
        expect(highlightedText).toHaveClass('font-bold', 'text-white');
    });
});

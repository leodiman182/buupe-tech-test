import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Footer from './index.tsx';
import '@testing-library/jest-dom';
import {footerComponent, linkedinLink, githubLink} from "../../utils/testid-list.ts";

describe('Expect Footer component', () => {
  it('to be in the document', () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId(footerComponent)).toBeInTheDocument();
  });

  it('should have correct external links', () => {
    const { getByTestId } = render(<Footer />);

    const linkedinIconLink = getByTestId(linkedinLink).closest('a');
    expect(linkedinIconLink).toHaveAttribute('href', 'https://www.linkedin.com/in/leonardodiman/');

    const githubIconLink = getByTestId(githubLink).closest('a');
    expect(githubIconLink).toHaveAttribute('href', 'https://github.com/leodiman182');
  });
});
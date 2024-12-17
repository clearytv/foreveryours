interface TypographyProps {
  fontSize?: string;
  letterSpacing?: string;
  lineHeight?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontStyle?: string;
  textTransform?: string;
}

export const getButtonStyle = (variant: 'large' | 'medium' | 'arrow'): TypographyProps => {
  return {
    fontSize: `var(--button-${variant}-font-size)`,
    letterSpacing: `var(--button-${variant}-letter-spacing)`,
    lineHeight: `var(--button-${variant}-line-height)`,
    fontFamily: 'var(--font-family-body)',
    textTransform: `var(--button-${variant}-text-transform)` as any,
  };
};

export const getHeroStyle = (variant: 'title' | 'subtitle'): TypographyProps => {
  return {
    fontSize: `var(--hero-${variant}-font-size)`,
    letterSpacing: `var(--hero-${variant}-letter-spacing)`,
    lineHeight: `var(--hero-${variant}-line-height)`,
    fontFamily: 'var(--font-family-display)',
    textTransform: variant === 'subtitle' ? 'uppercase' : 'none',
  };
};

export const getSectionStyle = (variant: 'title' | 'description'): TypographyProps => {
  return {
    fontSize: `var(--section-${variant}-font-size)`,
    letterSpacing: `var(--section-${variant}-letter-spacing)`,
    lineHeight: `var(--section-${variant}-line-height)`,
    fontFamily: variant === 'title' ? 'var(--font-family-display)' : 'var(--font-family-body)',
  };
};

export const getCardStyle = (variant: 'title' | 'description'): TypographyProps => {
  return {
    fontSize: `var(--card-${variant}-font-size)`,
    letterSpacing: `var(--card-${variant}-letter-spacing)`,
    lineHeight: `var(--card-${variant}-line-height)`,
    fontFamily: variant === 'title' ? 'var(--font-family-display)' : 'var(--font-family-body)',
    textTransform: variant === 'title' ? 'capitalize' : 'none',
  };
};

export const getTestimonialStyle = (variant: 'quote' | 'author'): TypographyProps => {
  return {
    fontSize: `var(--testimonial-${variant}-font-size)`,
    letterSpacing: `var(--testimonial-${variant}-letter-spacing)`,
    lineHeight: `var(--testimonial-${variant}-line-height)`,
    fontFamily: variant === 'quote' ? 'var(--font-family-display)' : 'var(--font-family-body)',
    fontStyle: variant === 'author' ? 'italic' : 'normal',
    fontWeight: variant === 'author' ? 300 : 400,
  };
};

export const getPackageStyle = (variant: 'title' | 'price'): TypographyProps => {
  return {
    fontSize: `var(--package-${variant}-font-size)`,
    letterSpacing: `var(--package-${variant}-letter-spacing)`,
    lineHeight: `var(--package-${variant}-line-height)`,
    fontFamily: 'var(--font-family-display)',
    textTransform: variant === 'price' ? 'uppercase' : 'none',
  };
};

export const getFooterStyle = (variant: 'title' | 'info'): TypographyProps => {
  return {
    fontSize: `var(--footer-${variant}-font-size)`,
    lineHeight: `var(--footer-${variant}-line-height)`,
    fontFamily: variant === 'title' ? 'var(--font-family-display)' : 'var(--font-family-body)',
    fontWeight: variant === 'info' ? 300 : 400,
    textTransform: variant === 'title' ? 'capitalize' : 'none',
  };
}; 
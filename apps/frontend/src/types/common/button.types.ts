// Define the possible variants for the button
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline';

// Define the possible sizes for the button
export type ButtonSize = 'small' | 'medium' | 'large';

// Define the button props interface
export interface ButtonProps {
  onClick: () => void; 
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

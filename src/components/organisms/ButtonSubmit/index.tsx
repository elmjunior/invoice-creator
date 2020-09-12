import React from 'react';
import { Button } from './styles';
interface Props {
  type?: 'primary' | 'secondary' | 'danger' | undefined;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
  small?: boolean | undefined;
}

const ButtonSubmit: React.FC<Props> = ({
  children,
  type,
  disabled,
  small,
  onClick,
}) => {
  const className = () => {
    if (disabled) {
      return 'inactive';
    }
    const style = type || 'primary';

    return `${style} ${small && 'small'}`;
  };
  return (
    <Button
      type="submit"
      // type={htmlType || 'button'}
      onClick={onClick}
      disabled={disabled}
      className={`button ${className()} `}
    >
      {children}
    </Button>
  );
};

export default ButtonSubmit;

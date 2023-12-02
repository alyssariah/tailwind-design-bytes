import React from 'react';
import clsx from 'clsx';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  label?: string;
  shape?: 'round' | 'square';
  disabled?: boolean;
  StartIcon?: any;
  EndIcon?: any;
  boxShadow?: number;
  configuration?: 'filled' | 'outlined';
  onClick?: any;
  stretch?: boolean;
}

export const Button = ({
  size = 'medium',
  label = 'Button text',
  shape = 'square',
  disabled,
  StartIcon,
  EndIcon,
  boxShadow = 4,
  configuration = 'filled',
  onClick,
  stretch,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx('flex justify-center items-center font-[400] px-[24px] tracking-[0.5px]', {
        [`shadow-${boxShadow}`]: configuration === 'filled',
        ['w-[100%]']: stretch,
        ['rounded-[5px]']: shape == 'square',
        ['rounded-[50px]']: shape == 'round',
        ['text-[.875rem] leading-[16px] h-[2.25rem]']: size === 'small',
        ['text-[1rem] leading-[16px] h-[2.5rem]']: size === 'medium',
        ['text-[1.125rem] leading-[20px] h-[2.875rem]']: size === 'large',
        ['bg-blue-500 text-white-500 outline-0 border-none hover:opacity-80']:
          configuration === 'filled',
        ['border-blue-500 border-[1px] border-solid text-blue-500 bg-transparent hover:opacity-80']:
          configuration === 'outlined',
        ['cursor-pointed']: !disabled,
        ['cursor-not-allowed bg-dialog-bg']: disabled,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {StartIcon && (
        <span className="mr-2">
          <StartIcon />
        </span>
      )}
      {label}
      {EndIcon && (
        <span className="ml-2">
          <EndIcon />
        </span>
      )}
    </button>
  );
};

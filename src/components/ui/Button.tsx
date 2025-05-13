import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  as?: React.ElementType;
}

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  fullWidth = false,
  as: Component = "button",
  ...props
}: ButtonProps) => {
  // Button style variants
  const variants = {
    primary:
      "bg-restaurant-brown text-restaurant-cream hover:bg-restaurant-brown/90",
    outline:
      "border border-restaurant-gold text-restaurant-gold hover:bg-restaurant-gold/10",
    ghost: "text-restaurant-brown hover:bg-restaurant-cream/20",
    gold: "bg-restaurant-gold text-white hover:bg-restaurant-gold/90",
  };

  // Button size variants
  const sizes = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  };

  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className
      )}
      {...props}>
      <motion.span
        whileTap={{ scale: 0.97 }}
        className="flex items-center justify-center">
        {children}
      </motion.span>
    </Component>
  );
};

export default Button;

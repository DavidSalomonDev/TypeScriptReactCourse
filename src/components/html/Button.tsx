type ButtonProps = {
	variant: "primary" | "secondary";
	children: string;
} & Omit<React.ComponentProps<"button">, "children">; // to exclude default type in children

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
	return (
		<button className={`button-${variant}`} {...rest}>
			{children}
		</button>
	);
};

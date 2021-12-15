type RandomNumberType = {
	value: number;
};

type PositiveNumber = RandomNumberType & {
	isPositive: boolean;
	isNegative?: never;
	iszero?: never;
};

interface NegativeNumber extends RandomNumberType {
	isNegative: boolean;
	isPositive?: never;
	iszero?: never;
}

type zero = RandomNumberType & {
	iszero: boolean;
	isNegative: never;
	isPositive: never;
};

// type RandomNumberProps = {
// 	value: number;
// 	isPositive?: boolean;
// 	isNegative?: boolean;
// 	iszero?: boolean;
// };

type RandomNumberProps = PositiveNumber | NegativeNumber | zero;

export const RandomNumber = ({
	value,
	isPositive,
	isNegative,
	iszero,
}: RandomNumberProps) => {
	return (
		<div>
			{value} {isPositive && "positive"} {isNegative && "negative"}
			{iszero && "zero"}
		</div>
	);
};

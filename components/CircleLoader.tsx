'use client';

import * as React from 'react';

import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { CirclePile, Hammer, House, Tent, Warehouse } from 'lucide-react';

interface CircularProgressProps {
	value: number;
	renderLabel?: (progress: number) => number | string;
	size?: number;
	fill: string;
	strokeWidth?: number;
	circleStrokeWidth?: number;
	progressStrokeWidth?: number;
	shape?: 'square' | 'round';
	className?: string;
	progressClassName?: string;
	labelClassName?: string;
	showLabel?: boolean;
	icon: string;
	index: number;
	bg: string;
}

const CircularProgress = ({
	value,
	renderLabel,
	fill,
	className,
	icon,
	progressClassName,
	labelClassName,
	showLabel,
	shape = 'round',
	size = 100,
	strokeWidth,
	circleStrokeWidth = 5,
	progressStrokeWidth = 5,
	index,
	bg = 'dark',
}: CircularProgressProps) => {
	const radius = size / 2 - 10;
	const circumference = Math.ceil(3.14 * radius * 2);
	const percentage = Math.ceil(circumference * ((100 - value) / 100));

	const viewBox = `-${size * 0.125} -${size * 0.125} ${size * 1.25} ${
		size * 1.25
	}`;

	return (
		<div className='relative kmt-circle-loader'>
			<svg
				width={size}
				height={size}
				version='1.1'
				xmlns='http://www.w3.org/2000/svg'
				style={{ transform: 'rotate(-90deg)' }}
				className='relative '
			>
				{/* Base Circle */}
				<circle
					r={radius}
					cx={size / 2}
					cy={size / 2}
					fill='transparent'
					strokeWidth={strokeWidth ?? circleStrokeWidth}
					strokeDasharray={circumference}
					strokeDashoffset='0'
					className={cn('stroke-primary/0', className)}
				/>

				{/* Progress */}
				<circle
					r={radius}
					cx={size / 2}
					cy={size / 2}
					strokeWidth={strokeWidth ?? progressStrokeWidth}
					strokeLinecap={shape}
					fill={fill}
					strokeDashoffset={percentage}
					strokeDasharray={circumference}
					className={cn('stroke-primary ', progressClassName)}
				/>
			</svg>
			{icon === 'sotori' && (
				<House className={`kmt-icon-bg-${bg}`} size={48} strokeWidth={1.4} />
			)}
			{icon === 'pagode' && (
				<Tent className={`kmt-icon-bg-${bg}`} size={48} strokeWidth={1.4} />
			)}
			{icon === 'oprema' && (
				<CirclePile
					className={`kmt-icon-bg-${bg}`}
					size={48}
					strokeWidth={1.4}
				/>
			)}
			{icon === 'hale' && (
				<Warehouse
					className={`kmt-icon-bg-${bg}`}
					size={48}
					strokeWidth={1.4}
				/>
			)}
		</div>
	);
};

export default function circularDemo({
	value,
	size,
	showLabel,
	strokeWidth,
	fill,
	icon,
	labelClassName,
	renderLabel,
	className,
	progressClassName,
	index,
	bg,
}) {
	return (
		<>
			<CircularProgress
				value={value}
				size={size}
				showLabel
				strokeWidth={strokeWidth}
				fill={fill}
				icon={icon}
				renderLabel={renderLabel}
				className={className}
				progressClassName={progressClassName}
				bg={bg}
			/>
		</>
	);
}

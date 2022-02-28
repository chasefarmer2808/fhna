import { FC } from 'react';
import { SliceProps } from './BaseSlice';

export interface SliceFC<P = any> extends FC<SliceProps<P>> {}
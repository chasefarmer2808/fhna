import { Component } from 'react';

export interface SliceCommonProps {
    id: string;
}

export interface SliceProps<P> {
    sliceType: string;
    sliceData: P & SliceCommonProps;
}

export interface SliceState {}

export class SliceComponent<
    P = { [key: string]: any },
    S = { [key: string]: any }
> extends Component<SliceProps<P>, SliceState & S> {
    getType() {
        return this.props.sliceType;
    }
}
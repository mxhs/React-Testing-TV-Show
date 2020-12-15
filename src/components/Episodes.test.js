import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes'

import {fetchShow} from '../api/fetchShow'

test ('Episodes component and card renders correctly', () => {
    render(<Episodes episodes={[{
        id: 453425,
        image: {
                medium: 'http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg'
            },
        name: "Chapter One: Meow",
        season: 2,
        number: 1,
        summary: "<p>A love letter to the '80s </p>",
        runtime: 60
    }]}/>)

    const epInfo = screen.queryByText(/Season 2, Episode 1/i)
    const rTime = screen.queryByText(/60 minutes/i)
    const img = screen.getByRole("img")
    const header = screen.queryByText(/Chapter One: Meow/i)

    expect(epInfo).toBeInTheDocument();
    expect(rTime).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(header).toBeInTheDocument();

})
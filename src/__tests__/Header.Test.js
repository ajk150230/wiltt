
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Header from '../Components/Header'
import { interpolate } from 'gsap'

it('hamburger button works', ()=>{
    const { container, getByTestId}=render(<Header/>)
    const hamburger = getByTestId('hamburger')
    fireEvent.click(hamburger)

    expect(container.textContent).toCotain('Menu')
})

it('menu no shown', ()=>{
    const {queryByTestId} = render(<Header/>)
    const menu = queryByTestId('menu')

    expect(menu).not.toBeTruthy()
})
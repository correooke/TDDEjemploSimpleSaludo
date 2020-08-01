import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Saludo from './index'

test("Testeo del componente Saludo (render)", async () => {
    render(<Saludo usuario="Emi" mensaje="¿como estás en la primera emisión?"></Saludo>)
})

test("Testeo del componente Saludo renderiza el usuario", async () => {
    render(<Saludo usuario="Emi" mensaje="¿como estás en la primera emisión?"></Saludo>)

    const usuario = await screen.findByRole("heading")

    screen.debug()

    expect(usuario).toHaveTextContent("Emi")
})

test("Testeo del componente Saludo con botón", async () => {
    render(<Saludo usuario="Emi" mensaje="¿como estás en la primera emisión?"></Saludo>)

    const boton = await screen.findByRole("button")

    screen.debug()
    
    expect(boton).toHaveTextContent("Mostrar saludo")
})

test("Testeo del componente Saludo con click en el botón", async () => {
    render(<Saludo usuario="Emi" mensaje="¿como estás en la primera emisión?"></Saludo>)

    fireEvent.click(screen.getByRole("button"))

    screen.debug()
    
    const boton = await screen.findByText(/como estás/)

    expect(boton).toHaveTextContent("¿como estás en la primera emisión?")
})


test("Testeo del componente Saludo con click en el botón", async () => {
    render(<Saludo usuario="Emi" mensaje="¿como estás en la primera emisión?"></Saludo>)

    fireEvent.click(screen.getByRole("button"))

    screen.debug()
    
    const boton = await screen.findByText(/como estás/)
    
    fireEvent.click(screen.getByRole("button"))

    const botonSinMensaje = await screen.findByText(/sin mensaje/)

    expect(botonSinMensaje).toHaveTextContent("sin mensaje")
})
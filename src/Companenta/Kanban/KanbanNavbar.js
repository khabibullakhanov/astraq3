import React from 'react'
import { NavLink } from 'react-router-dom'
import "./KanbanNavbar.css"


export function KanbanNavbar() {
    return (
        <div id='kanban-navbar-container'>
            <NavLink activeclassname="active" to="/">
                All
            </NavLink>
            <NavLink activeclassname="active" to="/">
                To-do
            </NavLink>
            <NavLink activeclassname="active" to="/">
                On Progress
            </NavLink>
            <NavLink activeclassname="active" to="/">
                Completed
            </NavLink>
            <NavLink activeclassname="active" to="/">
                On review
            </NavLink>
            <NavLink activeclassname="active" to="/">
                Revised
            </NavLink>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import "./Contact.css"

import { Header } from "../../Companenta/Header/Header"
import { ContactUser } from '../../Companenta/Contact Companents/ContactUser/ContactUser'
import { ContactPagination } from "../../Companenta/Contact Companents/ContactPagination"
import greyStar from "../../Assets/Icons/Grey Star.svg"
import bagImg from "../../Assets/Icons/Bag.svg"
import phone from "../../Assets/Icons/Phone.svg"
import message from "../../Assets/Icons/Message.svg"
import { ContactData } from "../../Companenta/Data/ContactData"
import yellowStar from "../../Assets/Icons/Yellow Star.svg"
import { Checkbox } from "@mui/material";


export function Contact() {

    const [user, setUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setpostsPerPage] = useState(12)



    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentUsers = user.slice(firstPostIndex, lastPostIndex);

    return (
        <div id='contact-main-container'>
            <Header />
            <div>
                <ContactUser user={currentUsers} />
                <ContactPagination
                    totalPosts={user.length}
                    setCurrentPage={setCurrentPage}
                    postsPerPage={postsPerPage}
                    currentPage={currentPage}
                />
            </div>
        </div>
    )
}

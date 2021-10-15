import React from 'react'
import { Card } from "react-bootstrap"
import {Link} from "react-router-dom"
import './UserCard.css'

const UserCard = ({ user }) => {
    return (
        // <Link to={`/users/${user.id}`}>
        <Link to={{
            pathname:`/users/${user.id}`,
            state : user
        }}>
            <Card className="mb-2"  >
                <Card.Header>{user.id}</Card.Header>
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        <span>{user.email}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default UserCard

import React from 'react'
import BodyComponent from '../../components/bodyComponent'
import StatsBar from '../../components/stats'

export const DashboardAdmin = () => {
    return (
        <React.Fragment>
            <BodyComponent>
                <div className="row g-3">
                    <StatsBar />


                </div>
            </BodyComponent>

        </React.Fragment>
    )
}

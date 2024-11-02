import IncidentReport from "./IncidentReport";
import Sidebar from "../../layout/Sidebar"

const AdminHome = () => {
    return (
        <div className="flex h-screen bg-dark-blue text-white">
            <Sidebar />
            <IncidentReport />
        </div>
    )
}

export default AdminHome;
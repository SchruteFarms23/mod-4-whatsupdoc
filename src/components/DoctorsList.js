import React from 'react';
import DoctorItem from './DoctorItem'

class DoctorsList extends React.Component {

	render() {
		const insuranceSearch = this.props.insuranceSearch
		const searched = this.props.searched.toLowerCase()

		if (insuranceSearch !== ""){
			var filteredDocs= this.props.doctors.filter(doctor => doctor.name.toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch)  || doctor.city.toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch) || doctor.state.toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch) || doctor.zip.includes(this.props.searched) && JSON.parse(doctor.insurance).includes(insuranceSearch) || doctor.specialties.split(" ")[0].toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch)  )
		}else{
			filteredDocs = this.props.doctors.filter(doctor => doctor.name.toLowerCase().includes(searched) || doctor.city.toLowerCase().includes(searched) || doctor.state.toLowerCase().includes(searched) || doctor.zip.includes(this.props.searched) || doctor.specialties.split(" ")[0].toLowerCase().includes(searched))
		}

		const doctorItems = filteredDocs.map((doctor, index) => {
			return <DoctorItem key={doctor.id} doctor={doctor} history={this.props.history}/>
		})
		return (
			<div className="ui cards">
				{doctorItems}
			</div>
		)
	}

}
export default DoctorsList;

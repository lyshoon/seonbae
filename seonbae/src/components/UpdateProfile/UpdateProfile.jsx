import React, { useState } from 'react';
import './UpdateProfile.css';

import { useNavigate } from 'react-router-dom';


const UpdateProfile = () => {

  const [selectedNationality, setSelectedNationality] = useState('');
  const handleChange = (event) => {
    setSelectedNationality(event.target.value);
  };

  const nationalities = [
    'Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan',
    'Antiguan', 'Argentine', 'Armenian', 'Australian', 'Austrian', 'Azerbaijani',
    'Bahamian', 'Bahraini', 'Bangladeshi', 'Barbadian', 'Belarusian', 'Belgian',
    'Belizean', 'Beninese', 'Bhutanese', 'Bolivian', 'Bosnian', 'Botswanan',
    'Brazilian', 'Bruneian', 'Bulgarian', 'Burkinabe', 'Burmese', 'Burundian',
    'Cabo Verdean', 'Cambodian', 'Cameroonian', 'Canadian', 'Central African',
    'Chadian', 'Chilean', 'Chinese', 'Colombian', 'Comorian', 'Congolese',
    'Costa Rican', 'Croatian', 'Cuban', 'Cypriot', 'Czech', 'Danish',
    'Djiboutian', 'Dominican', 'Dutch', 'East Timorese', 'Ecuadorean', 'Egyptian',
    'Equatorial Guinean', 'Eritrean', 'Estonian', 'Eswatini', 'Ethiopian',
    'Fijian', 'Filipino', 'Finnish', 'French', 'Gabonese', 'Gambian',
    'Georgian', 'German', 'Ghanaian', 'Greek', 'Grenadian', 'Guatemalan',
    'Guinean', 'Guyanese', 'Haitian', 'Honduran', 'Hungarian', 'Icelandic',
    'Indian', 'Indonesian', 'Iranian', 'Iraqi', 'Irish', 'Israeli',
    'Italian', 'Jamaican', 'Japanese', 'Jordanian', 'Kazakh', 'Kenyan',
    'Kiribati', 'Korean', 'Kuwaiti', 'Kyrgyz', 'Laotian', 'Latvian',
    'Lebanese', 'Liberian', 'Libyan', 'Liechtensteiner', 'Lithuanian', 'Luxembourger',
    'Madagascan', 'Malawian', 'Malaysian', 'Maldivian', 'Malian', 'Maltese',
    'Marshallese', 'Mauritanian', 'Mauritian', 'Mexican', 'Micronesian', 'Moldovan',
    'Monacan', 'Mongolian', 'Moroccan', 'Mozambican', 'Namibian', 'Nauruan',
    'Nepalese', 'Nigerian', 'Nigerien', 'North Korean', 'Norwegian', 'Omani',
    'Pakistani', 'Palauan', 'Panamanian', 'Papua New Guinean', 'Paraguayan', 'Peruvian',
    'Polish', 'Portuguese', 'Qatari', 'Romanian', 'Russian', 'Rwandan',
    'Saint Lucian', 'Saint Vincentian', 'Samoan', 'San Marinese', 'Sao Tomean', 'Saudi',
    'Scottish', 'Senegalese', 'Serbian', 'Seychellois', 'Sierra Leonean', 'Singaporean',
    'Slovak', 'Slovenian', 'Solomon Islander', 'Somali', 'South African', 'South Sudanese',
    'Spanish', 'Sri Lankan', 'Sudanese', 'Surinamese', 'Swazi', 'Swedish',
    'Swiss', 'Syrian', 'Taiwanese', 'Tajik', 'Tanzanian', 'Thai',
    'Togolese', 'Tongan', 'Trinidadian', 'Tunisian', 'Turkish', 'Turkmen',
    'Tuvaluan', 'Ugandan', 'Ukrainian', 'Uruguayan', 'Uzbek', 'Vanuatuan',
    'Vatican', 'Venezuelan', 'Vietnamese', 'Yemeni', 'Zambian', 'Zimbabwean'
  ];

  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/update-education-info'); // Navigate to the /next route
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text"> Update Your Profile </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <label htmlFor="name" > Your Name </label>
        <div id="name" className="input">
          <input type="text" placeholder="Name" required/>
        </div>
        
        <label htmlFor="bio" > Your Bio </label>
        <div id="bio" className="input">
          <input type="text" placeholder="Write something about yourself" />
        </div>

        <label htmlFor="age" > Age </label>
        <div id="age" className="input">
          <input type="number" min='1' placeholder="Your age" required/>
        </div>

        <label htmlFor="nationality" > Your nationality</label>
        <div id="nationality" className="input">
          <select placeholder="Your Nationality" name="nationality" value="{selectedNationality}"
        onChange={handleChange}>
              {nationalities.map((nationality, index) => (
              <option key={index} value={nationality}>
                {nationality}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="submit-container">
        <button className="next-button" onClick={handleNextClick}> Next </button>
      </div>
    </div>
  );
}

export default UpdateProfile;
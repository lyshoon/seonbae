import React, { useState } from 'react';
import './ProfileEdit.css';

const ProfileEdit = () => {
    const user = {
        name: "Your name",
        bio : "Hi!",
        age : "23",
        university: "Korea University",
        major: "Computer Science",
        nationality: "Myanmar",
        degree: "Bachelor's",
        facebookProfile: "https://www.facebook.com/shoon.may.1804", 
        instagramProfile: "https://www.instagram.com/username",
      };

      const [selectedNationality, setSelectedNationality] = useState('');
      const handleChangeNationality  = (event) => {
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
        'Monacan', 'Mongolian', 'Moroccan', 'Mozambican', 'Myanmar', 'Namibian', 'Nauruan',
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
    
      const [selectedDegree, setSelectedDegree] = useState('');
      const handleChangeDegree = (event) => {
        setSelectedDegree(event.target.value);
      };
    
      const degreeLevel = [
        'Undergraduate (1st year)', 'Undergraduate (2nd year)', 'Undergraduate (3rd year)','Undergraduate (4th year)', 'Post-graduate', 'Doctorate'
       ];
    
      const universities = [
        'Ajou University', 'Busan National University of Education', 'Chonnam National University', 'Chung-Ang University', 'Chungbuk National University', 'Dong-A University', 'Dongguk University', 'Ewha Womans University', 'Gachon University', 'Gyeongsang National University', 'Hallym University', 'Hanbat National University', 'Hanyang University', 'Hoseo University', 'Inha University', 'Jeju National University', 'KAIST (Korea Advanced Institute of Science and Technology)', 'Konkuk University', 'Korea Maritime and Ocean University', 'Korea University', 'Korea University of Technology and Education', 'Kyung Hee University', 'Kyungpook National University', 'Myongji University', 'Namseoul University', 'NongHyup University', 'POSTECH (Pohang University of Science and Technology)', 'Pukyong National University', 'Sangmyung University', 'Sejong University', 'Seongnam University', 'Seoul Cyber University', 'Seoul National University', 'Sogang University', "Sookmyung Women's University", 'Soongsil University', 'Sungkyunkwan University', 'Sunmoon University', 'Woosong University', 'Yonsei University'
      ];
    
      const [selectedUniversity, setSelectedUniversity] = useState('');
      const handleChangeUniversity = (event) => {
        setSelectedUniversity(event.target.value);
      };
    
      const majors = [
        'Art History', 'Biology', 'Business', 'Business Administration', 'Chemistry', 'Civil Engineering', 'Computer Science', 'Economics', 'Electrical Engineering', 'English Literature', 'Environmental Science', 'Finance', 'History', 'Marketing', 'Mathematics', 'Mechanical Engineering', 'Nursing', 'Philosophy', 'Physics', 'Political Science', 'Psychology', 'Sociology'
      ]
    
      const [selectedMajor, setSelectedMajor] = useState('');
      const handleChangeMajor = (event) => {
        setSelectedMajor(event.target.value);
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
              <input type="text" placeholder="Name" value={user.name}required/>
            </div>
            
            <label htmlFor="bio" > Your Bio </label>
            <div id="bio" className="input">
              <input type="text" placeholder="Write something about yourself" value={user.bio} />
            </div>
    
            <label htmlFor="age" > Age </label>
            <div id="age" className="input">
              <input type="number" min='1' placeholder="Your age" value={user.age} required/>
            </div>
    
            <label htmlFor="nationality" > Your nationality</label>
            <div id="nationality" className="input">
              <select className="dropdown" placeholder="Your Nationality" name="nationality" value={user.nationality}
            onChange={handleChangeNationality}>
                  {nationalities.map((nationality, index) => (
                  <option key={index} value={nationality}>
                    {nationality}
                  </option>
                ))}
              </select>
            </div>
    
            <label htmlFor="degree" > Your degree</label>
            <div id="degree" className="input">
              <select className="dropdown" placeholder="Your Degree" name="degree" value={user.degree}
            onChange={handleChangeDegree}>
                    {degreeLevel.map((degree, index) => (
                  <option key={index} value={degree}>
                    {degree}
                  </option>
                    ))}
              </select>
            </div>
    
            <label htmlFor="univerisity" > Your University</label>
            <div id="university" className="input">
              <select className="dropdown" placeholder="Your University" name="university" value={user.university}
            onChange={handleChangeUniversity}>
                    {universities.map((univerisity, index) => (
                  <option key={index} value={univerisity}>
                    {univerisity}
                  </option>
                    ))}
              </select>
            </div>
    
            <label htmlFor="major" > Your Major</label>
            <div id="major" className="input">
              <select className="dropdown" placeholder="Your  Major" name="major" value={user.major}
            onChange={handleChangeMajor}>
                    {majors.map((major, index) => (
                  <option key={index} value={major}>
                    {major}
                  </option>
                    ))}
              </select>
            </div>
    
            <label htmlFor="socialmedia" > Your Social Media Account</label>
            <div id="socialmedia" className="input">
              <select className="social-media-dropdown" placeholder="Social Media" name="socialmedia"> 
                <option> Facebook </option>
                <option> Instagram </option>
              </select>
              <input type="text" className="input" value={user.facebookProfile}/>
      
            </div>
    
          </div>
    
          <div className="submit-container">
            <button className="save-button" > Save </button>
          </div>
        </div>
      );
}

export default ProfileEdit;

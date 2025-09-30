import React from 'react'
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import PrayerCard from './PrayerCard';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// Lebrary 
import axios from 'axios';
import moment from 'moment';
import "moment/dist/locale/ar-dz"
import { useState , useEffect } from 'react';

moment.locale('ar');

export default function mainContent() {

  const avalibleCitys = [
    {
    displayName:"الشلف",
    apiName:"chlef"
    },
    {
    displayName:"مكة المكرمة",
    apiName:"makkah al mukarramah"
    },
    {
      displayName:"الجزائر",
      apiName:"algeria"
    }
  ]

  const prayersArray = [
    {key: "Fajr", displayName: "الفجر"},
    {key: "Dhuhr", displayName: "الظهر"},
    {key: "Asr", displayName: "العصر"},
    {key: "Maghrib", displayName: "المغرب"},
    {key: "Isha", displayName: "العشاء"},
  ]

  const [today, setToday] = useState("")
  const [city, setCity] = useState({
    displayName:"الشلف",
    apiName:"chlef"
  })
  const [nextPrayerIndex, setnextPrayerIndex] = useState(2)
  const [timings, setTimings] = useState({
    "Fajr": "04:50",
    "Dhuhr": "12:57",
    "Asr": "16:39",
    "Maghrib": "19:32",
    "Isha": "20:58",
  })

  const [remainingTime , setremainingTime] = useState("")
  const getTimings = async () => {
      const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity?country=DZ&city=${city.apiName}`);
      setTimings(response.data.data.timings)
    }

  useEffect(() => {
      getTimings()

  },[city])

  useEffect(() =>{
    let interval = setInterval(() =>{
      setupCountdownTimer()
    },1000)

      const time = moment()
      setToday(time.format("MMM Do YYYY | h:mm"))

    return () => {
      clearInterval(interval)
    }
  },[timings])

const setupCountdownTimer = () =>{
    const momentNow = moment()
    let prayerIndex = 2;

    if  (momentNow.isAfter(moment(timings["Fajr"],"hh:mm")) 
        && momentNow.isBefore(moment(timings["Dhuhr"],"hh:mm"))){
          prayerIndex = 1

      }else if(momentNow.isAfter(moment(timings["Dhuhr"],"hh:mm")) 
          && momentNow.isBefore(moment(timings["Asr"],"hh:mm"))){
          prayerIndex = 2

      }else if(momentNow.isAfter(moment(timings["Asr"],"hh:mm")) 
          && momentNow.isBefore(moment(timings["Maghrib"],"hh:mm"))){
          prayerIndex = 3

      }else if(momentNow.isAfter(moment(timings["Maghrib"],"hh:mm")) 
          && momentNow.isBefore(moment(timings["Isha"],"hh:mm"))){
          prayerIndex = 4
      }else {
        prayerIndex = 0
      }
      setnextPrayerIndex(prayerIndex)
  // now after knowing what the next prayer is, we can setup the countdown timer by getting the prayer's time
  const nextPrayerObject = prayersArray[prayerIndex]
  const nextPrayerTime = timings[nextPrayerObject.key]
  const nextPrayerTimeMoment = moment(nextPrayerTime,"hh:mm");

  let remainongTime = moment(nextPrayerTime,"hh:mm").diff(momentNow);
  
  if(remainongTime < 0){
    const midnightDiff = moment("23:59:59","hh:mm:ss").diff(momentNow) 
    const fajerToMidnightDiff = nextPrayerTimeMoment.diff(moment("00:00:00","hh:mm:ss"))
    
    const totlaDiffernce = midnightDiff + fajerToMidnightDiff
    
    remainongTime = totlaDiffernce;
  }
  const durationRemainingTime = moment.duration(remainongTime)
  
  setremainingTime(`${durationRemainingTime.hours()}:${durationRemainingTime.minutes()}:${durationRemainingTime.seconds()}`)

}

  const handleCityChange = (event) => {
    const cityObject = avalibleCitys.find((city) =>{
      return city.apiName == event.target.value
    })

    setCity(cityObject)
  };
  return (
    <>
    {/* Start Top Row */}
    <Grid container >
    <Grid size={{ xs: 6 }}>
        <div>
            <h2>{today}</h2>
            <h1> مواقيت الصلاة {city.displayName}</h1>
        </div>
    </Grid>
    <Grid size={{ xs: 6 }}>
        <div>
            <h2>متبقي على صلاة {prayersArray[nextPrayerIndex].displayName}</h2>
            <h1>{remainingTime}</h1>
        </div>
    </Grid>
    </Grid>
    {/* End Top Row */}
    <Divider style={{borderColor:'white',opacity:'0.2'}} />
    {/* START PRAYERS CARDS */}
    <Stack direction="row" spacing={2} justifyContent={'space-around'} style={{marginTop:"25px"}}>
        <PrayerCard name="الفجر" time={timings.Fajr} isNext={nextPrayerIndex === 0}/>
        <PrayerCard name="الظهر" time={timings.Dhuhr} isNext ={nextPrayerIndex === 1}/>
        <PrayerCard name="العصر" time={timings.Asr} isNext ={nextPrayerIndex === 2}/>
        <PrayerCard name="المغرب" time={timings.Maghrib} isNext ={nextPrayerIndex === 3}/>
        <PrayerCard name="العشاء" time={timings.Isha} isNext ={nextPrayerIndex === 4}/>
    </Stack>
    {/* END PRAYERS CARDS */}
    {/* START SELECT CITY */}
    <Stack direction='row' justifyContent={'center'} style={{marginTop:"25px"}}>
          <FormControl style={{width:"20%"}}>
        <InputLabel id="demo-simple-select-label">
            <span style={{color:"white"}}>المدينة</span>
        </InputLabel>
        <Select
          dir='ltr'
          style={{color:"white"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city.apiName}
          label="Age"
          onChange={handleCityChange}
        >
          {avalibleCitys.map((city) =>{
            return (
              <MenuItem 
                  value={city.apiName}>
                  {city.displayName}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Stack>
    {/* END SELECT CITY */}
    </>
  )
}

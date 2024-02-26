import React,{ useContext } from 'react'
import { HomeSectionCtx } from "../../../../store/home-context";
import AdModalBlock from "./UI/AdModalBlock";

const AdModal = () => {
  const {generalinfo:{services_broucher}}  = useContext(HomeSectionCtx);
  return (
    <>
    <AdModalBlock />
    </>
  )
}

export default AdModal
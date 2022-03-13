import React from 'react'

const ports = ['ATH', 'BSL', 'BFS', 'BLQ', 'BTS', 'BRS', 'CRL', 'BUD', 'DUB', 'EDI', 'EIN', 'GLA', 'HAM', 'CTA', 'KEF', 'CGN', 'SUF', 'LCA', 'LPL', 'LIS', 'LTN', 'STN', 'MAD']

export default function ListOfPorts() {
  return (
    <>
    {ports.map((v, index) => <option value = {v} key = {index}>{v}</option> )}
    </>
  )
}

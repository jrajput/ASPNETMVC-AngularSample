using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MeterRate.Models
{
    public class MeterRateModel
    {
        private int m_NoOfMinutes;        
        private int m_NoOfMiles;        
        private string m_DateOfRide;
        private string m_TimeOfStartOfRide;        
        private bool m_IsInNyState;
        private Double m_TotalFare;        

        public int NoOfMinutes
        {
            get { return m_NoOfMinutes; }
            set { m_NoOfMinutes = value; }
        }

        public int NoOfMiles
        {
            get { return m_NoOfMiles; }
            set { m_NoOfMiles = value; }
        }

        public string DateOfRide
        {
            get { return m_DateOfRide; }
            set { m_DateOfRide = value; }
        }

        public string TimeOfStartOfRide
        {
            get { return m_TimeOfStartOfRide; }
            set { m_TimeOfStartOfRide = value; }
        }

        public bool IsInNyState
        {
            get { return m_IsInNyState; }
            set { m_IsInNyState = value; }
        }

        public Double TotalFare
        {
            get { return m_TotalFare; }
            set { m_TotalFare = value; }
        }
    }
}
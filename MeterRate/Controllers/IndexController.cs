using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MeterRate.Models;

namespace MeterRate.Controllers
{
    public class IndexController : Controller
    {
        public ActionResult Index()
        {
            return View(GetDefaultModel());
        }

        private MeterRateModel GetDefaultModel()
        {
            MeterRateModel meterRateModel = new MeterRateModel();
            meterRateModel.NoOfMiles = 2;
            meterRateModel.NoOfMinutes = 5;
            meterRateModel.IsInNyState = true;
            meterRateModel.DateOfRide = "2010-10-08";
            meterRateModel.TimeOfStartOfRide = "05:30 PM";
            return meterRateModel;
        }
    }
}

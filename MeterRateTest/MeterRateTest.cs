using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MeterRate.Controllers;
using System.Web.Mvc;

namespace MeterRateTest
{
    [TestClass]
    public class MeterRateTest
    {
        [TestMethod]
        public void TestIndexAction()
        {
            try
            {
                IndexController ctrl = new IndexController();
                ViewResult res = (ViewResult)ctrl.Index();
                Assert.IsNotNull(res, "View result is null");
                Assert.IsNotNull(res.Model, "View result model is null");                
            }
            catch(Exception ex)
            {
                Assert.Fail(ex.Message);
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace george_site.Models
{
    public class Certification
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Organization { get; set; }
        public string OrgLogo { get; set; }
        public string Exam { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string CredentialUrl { get; set; }
    }
}

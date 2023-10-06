var data={"title":"Calculator: Oxygenation index","body":"<div id=\"topicContentCalculator\" class=\"utdArticleSection\"><div id=\"topicText\">\n<div id=\"mc3k\">\n\n\n\n\n\n<form name=\"OxygenIndex_form\" id=\"OxygenIndex_form\" action=\"\" onsubmit=\"return false;\" onkeydown=\"clrResults();\" onkeyup=\"OxygenIndex_fx();\" onreset=\"rrclr();\">\n\n<table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">\n<span class=\"medCalcFontTitleBox\">\n\nCalculator: Oxygenation index\n</span></td></tr></table><br />&nbsp;<br />\n\n<center>\n<div id=\"calc_equation\">\n<table cellspacing=\"0\" cellpadding=\"10\" summary=\"MedCalc 3000 Table\"><tr><td align=\"left\" bgcolor=\"#6c9a9c\"><span class=\"medCalcFontFormuli\">OI = FiO2 * MeanAirwayPressure / PaO2</span></td></tr></table><br />&nbsp;<br />\n</div>\n</center>\n\n<div id=\"calc_main\">\n<center><table cellpadding=\"6\" cellspacing=\"0\" width=\"95%\" summary=\"MedCalc 3000 Table\"><tr><td align=\"right\" width=\"50%\">\n<center>\n<span class=\"medCalcFontIO\">\nInput:\n</span>\n<br />&nbsp;<br />\n<table cellpadding=\"3\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">FiO2</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"FiO2_param\" size=\"6\" value=\"\" onblur=\"OxygenIndex_fx(); minMaxCheck();\" onchange=\"OxygenIndex_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"FiO2_unit\" onchange=\"OxygenIndex_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|%O2\" selected=\"selected\">%O2</option>\n<option value=\"100|0|fractionO2\">fractionO2</option>\n<option value=\"3|21|litresO2\">litresO2</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Mean Airway Pressure</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Mean_Airway_Pressure_param\" size=\"6\" value=\"\" onblur=\"OxygenIndex_fx(); minMaxCheck();\" onchange=\"OxygenIndex_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"Mean_Airway_Pressure_unit\" onchange=\"OxygenIndex_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"0.0101971584453749|0|Pascal\">Pascal</option>\n<option value=\"1033.22707947762|0|atm\">atm</option>\n<option value=\"1019.71584453749|0|bar\">bar</option>\n<option value=\"1|0|cmH2O\" selected=\"selected\">cmH2O</option>\n<option value=\"13.5950555825428|0|cmHg\">cmHg</option>\n<option value=\"30.48|0|ftH2O\">ftH2O</option>\n<option value=\"1|0|gm/sqcm\">gm/sqcm</option>\n<option value=\"2.54|0|inH2O\">inH2O</option>\n<option value=\"34.5315553878333|0|inHg\">inHg</option>\n<option value=\"10.1971584453749|0|kPa\">kPa</option>\n<option value=\"1.01971584453749|0|mbar\">mbar</option>\n<option value=\"1.35950555825428|0|mmHg\">mmHg</option>\n<option value=\"70.3069601628334|0|psi\">psi</option>\n<option value=\"1.35950555825428|0|torr\">torr</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">PaO2</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"PaO2_param\" size=\"6\" value=\"\" onblur=\"OxygenIndex_fx(); minMaxCheck();\" onchange=\"OxygenIndex_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"PaO2_unit\" onchange=\"OxygenIndex_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"0.00750063755419211|0|Pascal\">Pascal</option>\n<option value=\"760.002100178515|0|atm\">atm</option>\n<option value=\"750.063755419211|0|bar\">bar</option>\n<option value=\"0.735561538478802|0|cmH2O\">cmH2O</option>\n<option value=\"10|0|cmHg\">cmHg</option>\n<option value=\"22.4199156928339|0|ftH2O\">ftH2O</option>\n<option value=\"0.735561538478802|0|gm/sqcm\">gm/sqcm</option>\n<option value=\"1.86832630773616|0|inH2O\">inH2O</option>\n<option value=\"25.4000840071406|0|inHg\">inHg</option>\n<option value=\"7.50063755419211|0|kPa\">kPa</option>\n<option value=\"0.750063755419211|0|mbar\">mbar</option>\n<option value=\"1|0|mmHg\" selected=\"selected\">mmHg</option>\n<option value=\"51.7150957831416|0|psi\">psi</option>\n<option value=\"1|0|torr\">torr</option>\n</select> </td></tr>\n\n\n</table>\n</center>\n</td><td align=\"left\" bgcolor=\"#eeeeee\">\n<center><span class=\"medCalcFontIO\">Result:</span>\n\n<br />&nbsp;<br />\n<table bgcolor=\"#eeeeee\" summary=\"MedCalc 3000 Table\" cellspacing=\"4\">\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">OI</span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"OI_param\" size=\"6\" onfocus=\"blur();\" /></td>\n<td valign=\"top\"><span class=\"medCalcFontOne\">\n<select name=\"OI_unit\" onchange=\"OxygenIndex_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|#\">#</option>\n<option value=\"1|0|index\" selected=\"selected\">index</option>\n<option value=\"1|0|none\">none</option>\n<option value=\"1|0|number\">number</option>\n<option value=\"1|0|points\">points</option>\n<option value=\"1|0|score\">score</option>\n</select>\n</span></td>\n</tr>\n\n\n<tr><td colspan=\"3\">&nbsp;<br /></td></tr>\n<tr><td colspan=\"3\" align=\"center\"><span class=\"medCalcFontOneBold\">Decimal Precision:</span>\n<select name=\"decpts\" onchange=\"OxygenIndex_fx();\" class=\"medCalcFontSelect\">\n<option>0</option>\n<option>1</option>\n<option selected=\"selected\">2</option>\n<option>3</option>\n\n</select></td></tr>\n\n</table>\n</center><br />&nbsp;<br />\n<center>\n<span class=\"medCalcFontOne\">\n\n\n\n\n\n<input type=\"reset\" name=\"reset\" value=\"Reset form\" />\n</span>\n</center>\n</td></tr></table>\n</center>\n\n<br />&nbsp;<br />\n<table width=\"70%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">    \n<span class=\"medCalcFontTitleBox\">\n\nOxygenation Index Interpretation\n</span></td></tr></table><br />&nbsp;<br />\n<center>\n<table border=\"1\" cellpadding=\"4\" cellspacing=\"0\" summary=\"RRTable\">\n<tr id=\"rr1_1\"><td align=\"right\" style=\"border-right: 0px\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">0-25 index:</span></td><td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\">Good outcome</span></td></tr>\n<tr id=\"rr1_2\"><td align=\"right\" style=\"border-right: 0px\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">25-40 index:</span></td><td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\"> Chance of death > 40%</span></td></tr>\n<tr id=\"rr1_3\"><td align=\"right\" style=\"border-right: 0px\" nowrap=\"nowrap\"><span class=\"medCalcFontOneBold\">40-1000 index:</span></td><td align=\"left\" style=\"border-left: 0px;\"><span class=\"medCalcFontOne\"> Consider ECMO (extracorporeal membrane oxygenation)</span></td></tr>\n\n</table>\n</center>\n\n\n</div><br />&nbsp;<br />\n<div id=\"calc_hints\">  \n<span class=\"medCalcFontOne\">\n\n\n\n</span>\n\n</div>\n\n\n\n<div id=\"calc_notes\">\n<span class=\"medCalcFontOneBold\">Notes</span>\n<ul class=\"medCalcFontOne\">\n<li>The oxygenation index is used to assess the intensity of ventilatory support required to maintain oxygenation.</li>\n<li>It is used in neonatology and pediatrics to assess the need for potential ECMO therapy.</li>\n\n</ul>\n</div>\n\n\n<br />&nbsp;<br />\n\n\n<div id=\"calc_refs\">\n<span class=\"medCalcFontRef\">\n<b>References</b></span>\n<ol>\n<li><span class=\"medCalcFontRef\">Brudno DS et at. Compliance, alveolar-arterial oxygen difference, and oxygenation index changes in patients managed with extracorporeal membrance oxygenation. <i>Ped. Pulmonology</i>. 9(1):19-23,1990.</span></li>\n<li><span class=\"medCalcFontRef\">Durand M et al. Oxygenation index in patients with meconium aspiration: conventional and extracorporeal membrane oxygention therapy. <i>Critical Care Med</i>. 18(4):373-7, 1990.</span></li>\n<li><span class=\"medCalcFontRef\">Perlman M (ed). Resident's Handbook of Neonatology, 2nd ed. (Hamilton, Ontario: BC Decker, 1999) p. 121.</span></li>\n<li><span class=\"medCalcFontRef\">O'Brien A, Short B (ed.). <i>Children's National Medical Center ECMO Training Manual</i>. 8th ed (May, 1994) p. 19.</span></li>\n\n</ol>\n</div>\n\n\n</form>\n\n</div>\n</div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"printDisclaimer\">\r\n\t<b>Only digits 0 to 9 and a single decimal point (&quot;.&quot;) are acceptable as numeric inputs. Attempted input of other characters into a numeric field may lead to an incorrect result.</b>\r\n\t<p>\r\n\tInformation on this page may not appear correctly if printed. </p>\r\n</div>\r\n<div id=\"disclaimerCalculator\">\r\n\t<div class=\"medCalcFontTwo\">\r\n\t\t<p class=\"header\">Legal Notices and Disclaimer</p>\r\n\t\t<p>\r\n\t\t\tAll information contained in and produced by the EBMcalc system is provided\r\n\t\t\tfor educational purposes only. This information should not be used for the diagnosis or treatment\r\n\t\t\tof any health problem or disease. \r\n\t\t\t<b>THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.</b>\r\n\t\t\t<a href=\"https://www.uptodate.com/legal/ebmcalc-disclaimer\" class=\"medCalcDisclaimerLink\">Click here for full notice and disclaimer.</a>\r\n\t\t</p>\r\n\t\t<p class=\"copy\">EBMcalc is Copyright &copy; 1998-2018 Foundation Internet Services, LLC</p>\r\n\t</div>\r\n</div><div id=\"topicVersionRevision\">Topic 13443 Version 3.0</div></div>","outline":null,"javascript":"\n<!--\n\n\nfunction log(i){\nreturn Math.log(i) * Math.LOG10E;   \n}\n\nfunction ln(i){\nreturn Math.log(i);\n}\n\nfunction sq(i){\nreturn i * i;\n}\n\nfunction sqr(i){\nreturn Math.sqrt(i);\n}\n\n\nfunction power(x,y){\nreturn Math.pow(x,y);\n}\n\nfunction eTo(x){\nreturn Math.exp(x);\n}\n\n\nfunction fixDP(r, dps) {\nif (isNaN(r)) return \"NaN\";\nvar msign = '';\nif (r < 0) msign = '-';\nx = Math.abs(r);\nif (x > Math.pow(10, 21)) return msign + x.toString();\nvar m = Math.round(x * Math.pow(10, dps)).toString();\nif (dps == 0) return msign + m;\nwhile (m.length <= dps) m = \"0\" + m;\nreturn msign + m.substring(0, m.length - dps) + \".\" + m.substring(m.length - dps);\n}\n\nvar currenttimeout;\n\n\nvar calctxt = ''; \nvar xmltxt = ''; \nvar htmtxt = ''; \n\n\n\nfunction OxygenIndex_fx() {\n\ncurrenttimeout = self.setTimeout('minMaxCheck();', 3000);\n\nwith(document.OxygenIndex_form){\n\n\ndoCalc = true;\nif (FiO2_param.value.indexOf(',') >= 0){ FiO2_param.value = ''; doCalc = false; alert('Comma character not allowed'); }\nparam_value = parseFloat(FiO2_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = FiO2_unit.options[FiO2_unit.selectedIndex].value.split('|');\nFiO2 = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nif (Mean_Airway_Pressure_param.value.indexOf(',') >= 0){ Mean_Airway_Pressure_param.value = ''; doCalc = false; alert('Comma character not allowed'); }\nparam_value = parseFloat(Mean_Airway_Pressure_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Mean_Airway_Pressure_unit.options[Mean_Airway_Pressure_unit.selectedIndex].value.split('|');\nMean_Airway_Pressure = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nif (PaO2_param.value.indexOf(',') >= 0){ PaO2_param.value = ''; doCalc = false; alert('Comma character not allowed'); }\nparam_value = parseFloat(PaO2_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = PaO2_unit.options[PaO2_unit.selectedIndex].value.split('|');\nPaO2 = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\ndp = decpts.options[decpts.selectedIndex].text;\nOI =  FiO2 * Mean_Airway_Pressure / PaO2;\n\nunit_parts = OI_unit.options[OI_unit.selectedIndex].value.split('|');\nif (doCalc) OI_param.value = fixDP((OI - parseFloat(unit_parts[1])) / parseFloat(unit_parts[0]), dp);\n\n\n\n\nif (doCalc){\n\nrrclr();\nif ((OI >= 0) && (OI <= 25)){ document.getElementById('rr1_1').bgColor = \"#cccccc\";\n}\nif ((OI >= 25) && (OI <= 40)){ document.getElementById('rr1_2').bgColor = \"#cccccc\";\n}\nif ((OI >= 40) && (OI <= 1000)){ document.getElementById('rr1_3').bgColor = \"#cccccc\";\n}\n\n\n\n}\n\n\n}\n\n}\n\nfunction minMaxCheck(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.OxygenIndex_form){\n\nif (Mean_Airway_Pressure_param.value && Mean_Airway_Pressure < 0) {\nMean_Airway_Pressure = 0;\nMean_Airway_Pressure_param.value = \"\";\nclrResults();\ndoCalc = false;\nalert(\"The minimum value for Mean Airway Pressure is 0 cmH2O.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Mean_Airway_Pressure_param.value && Mean_Airway_Pressure > 75) {\nMean_Airway_Pressure_param.value = \"\";\nclrResults();\nMean_Airway_Pressure = 0;\ndoCalc = false;\nalert(\"The maximum value for Mean Airway Pressure is 75 cmH2O.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (PaO2_param.value && PaO2 < 0) {\nPaO2 = 0;\nPaO2_param.value = \"\";\nclrResults();\ndoCalc = false;\nalert(\"The minimum value for PaO2 is 0 mmHg.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (PaO2_param.value && PaO2 > 700) {\nPaO2_param.value = \"\";\nclrResults();\nPaO2 = 0;\ndoCalc = false;\nalert(\"The maximum value for PaO2 is 700 mmHg.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\n\n\n}\n\n}\n\n\nfunction clrResults(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.OxygenIndex_form){\n\nOI_param.value = '';\n\nrrclr();\n\n}\n\n}\n\n\n\n\n\n\n\n\n\nfunction rrclr(){\ndocument.getElementById('rr1_1').bgColor = \"\";\ndocument.getElementById('rr1_2').bgColor = \"\";\ndocument.getElementById('rr1_3').bgColor = \"\";\n}\n\n\n//-->\n"}
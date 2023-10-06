var data={"title":"Calculator: Mortality risk in postoperative patients with cirrhosis (SI units)","body":"<div id=\"topicContentCalculator\" class=\"utdArticleSection\"><div id=\"topicText\">\n<div id=\"mc3k\">\n\n\n\n\n<form name=\"MELD9_SI_form\" id=\"MELD9_SI_form\" action=\"\" onsubmit=\"return false;\" onkeydown=\"formKeyDown(event);\" onkeypress=\"return validNumberField(event);\" onkeyup=\"MELD9_SI_fx();\">\n\n<table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">\n<span class=\"medCalcFontTitleBox\">\n\n \nCalculator: Mortality risk in postoperative patients with cirrhosis (SI units)\n</span></td></tr></table><br />&nbsp;<br />\n\n<center>\n<div id=\"calc_equation\">\n<table cellspacing=\"0\" cellpadding=\"10\" summary=\"MedCalc 3000 Table\"><tr><td align=\"left\" bgcolor=\"#6c9a9c\"><span class=\"medCalcFontFormuli\">MELD score<sup>*</sup> = Math.round(10 * ((1.12 * ln(INR)) + (0.378 * ln(Bilirubin / 17.1)) + (0.957 * ln(Creatinine / 88.4)) + (0.643 * Cirrhosisetiology)))</span></td></tr><tr><td align=\"left\" bgcolor=\"#6c9a9c\"><span class=\"medCalcFontFormuli\">ExpDays = e<sup>((0.02382*(Age-60))+(0.88884*ASAMort)+(0.11798*(MELD score<sup>*</sup>-8)))</sup></span></td></tr><tr><td align=\"left\" bgcolor=\"#6c9a9c\"><span class=\"medCalcFontFormuli\">Mortality7days = 100 * (1 - 0.98370<sup>ExpDays</sup>)</span></td></tr><tr><td align=\"left\" bgcolor=\"#6c9a9c\"><span class=\"medCalcFontFormuli\">Mortality30days = 100 * (1 - 0.93479<sup>ExpDays</sup>)</span></td></tr><tr><td align=\"left\" bgcolor=\"#6c9a9c\"><span class=\"medCalcFontFormuli\">Mortality90days = 100 * (1 - 0.89681<sup>ExpDays</sup>)</span></td></tr></table><br />&nbsp;<br />\n</div>\n</center>\n\n<div id=\"calc_main\">\n<center><table cellpadding=\"6\" cellspacing=\"0\" width=\"95%\" summary=\"MedCalc 3000 Table\"><tr><td align=\"right\" width=\"50%\">\n<center>\n<span class=\"medCalcFontIO\">\nInput:\n</span>\n<br />&nbsp;<br />\n<table cellpadding=\"3\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Age</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Age_param\" size=\"6\" value=\"\" onblur=\"MELD9_SI_fx(); minMaxCheck();\" onchange=\"MELD9_SI_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"Age_unit\" onchange=\"MELD9_SI_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"0.0833333333333333|0|mo\">mo</option>\n<option value=\"1|0|yr\" selected=\"selected\">yr</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" valign=\"top\"><span class=\"medCalcFontOneBold\">ASA class</span></td>\n<td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"ASA_class_radio\" value=\"Class 3: Systemic disease with significant functional limitation|3\" onclick=\"MELD9_SI_fx();\" /> Class 3: Systemic disease with significant functional limitation</span></td></tr>\n<tr><td align=\"left\"><br /></td><td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"ASA_class_radio\" value=\"Class 4: Systemic disease that is a constant threat to life|4\" onclick=\"MELD9_SI_fx();\" /> Class 4: Systemic disease that is a constant threat to life</span></td></tr>\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Bilirubin</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Bilirubin_param\" size=\"6\" value=\"\" onblur=\"MELD9_SI_fx(); minMaxCheck();\" onchange=\"MELD9_SI_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"Bilirubin_unit\" onchange=\"MELD9_SI_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|mcmol/L\" selected=\"selected\">mcmol/L</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Creatinine</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Creatinine_param\" size=\"6\" value=\"\" onblur=\"MELD9_SI_fx(); minMaxCheck();\" onchange=\"MELD9_SI_fx();\" /></td>\n<td align=\"left\" width=\"115\" valign=\"top\"> <select name=\"Creatinine_unit\" onchange=\"MELD9_SI_fx();\" style=\"width:105px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|mcmol/L\" selected=\"selected\">mcmol/L</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">INR</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"INR_param\" size=\"6\" value=\"\" onblur=\"MELD9_SI_fx(); minMaxCheck();\" onchange=\"MELD9_SI_fx();\" /></td>\n<td align=\"left\">&nbsp;</td></tr>\n\n<tr><td align=\"right\" valign=\"top\"><span class=\"medCalcFontOneBold\">Cirrhosis etiology</span></td>\n<td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"Cirrhosis_etiology_radio\" value=\"Alcoholic or cholestatic|0\" onclick=\"MELD9_SI_fx();\" /> Alcoholic or cholestatic</span></td></tr>\n<tr><td align=\"left\"><br /></td><td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"Cirrhosis_etiology_radio\" value=\"Viral or other|1\" onclick=\"MELD9_SI_fx();\" /> Viral or other</span></td></tr>\n\n</table>\n</center>\n</td><td align=\"left\" bgcolor=\"#eeeeee\">\n<center><span class=\"medCalcFontIO\">Results:</span>\n\n<br />&nbsp;<br />\n<table bgcolor=\"#eeeeee\" summary=\"MedCalc 3000 Table\" cellspacing=\"4\">\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">MELD score<sup>*</sup></span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"MELD_score_param\" size=\"6\" onfocus=\"blur();\" /></td>\n</tr>\n\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">Mortality 7 days</span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"Mortality_7_days_param\" size=\"6\" onfocus=\"blur();\" /></td>\n<td valign=\"top\"><span class=\"medCalcFontOne\">\n<span style=\"white-space: nowrap;\"><span class=\"medCalcFontOneBold\">%</span>\n</span>\n</span></td>\n</tr>\n\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">Mortality 30 days</span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"Mortality_30_days_param\" size=\"6\" onfocus=\"blur();\" /></td>\n<td valign=\"top\"><span class=\"medCalcFontOne\">\n<span style=\"white-space: nowrap;\"><span class=\"medCalcFontOneBold\">%</span>\n</span>\n</span></td>\n</tr>\n\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">Mortality 90 days</span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"Mortality_90_days_param\" size=\"6\" onfocus=\"blur();\" /></td>\n<td valign=\"top\"><span class=\"medCalcFontOne\">\n<span style=\"white-space: nowrap;\"><span class=\"medCalcFontOneBold\">%</span>\n</span>\n</span></td>\n</tr>\n\n\n<tr><td colspan=\"3\">&nbsp;<br /></td></tr>\n\n</table>\n</center><br />&nbsp;<br />\n<div id=\"calc_buttons\">\n<center>\n<span class=\"medCalcFontOne\">\n\n\n\n\n\n<input type=\"reset\" name=\"reset\" value=\"Reset form\" />\n\n</span>\n</center>\n</div>\n</td></tr></table>\n</center>\n\n\n\n</div>\n<div id=\"calc_notes\">\n<span class=\"medCalcFontOneBold\">Notes</span>\n<ul class=\"medCalcFontOne\">\n<li><sup>*</sup>This is the original version of the model of end-stage liver disease (<b>MELD</b>) score as developed by investigators at Mayo Clinic.  A number of modifications have been made by the United Network for Organ Sharing (UNOS) to the model for its implementation in organ allocation for  liver transplantation. UNOS has set a minimum <b>MELD</b> score of 6 and a maximum score of 40.</li>\n<li>The original version of the <b>MELD</b> score should only be used in patients who are &ge;12 years of age.</li>\n<li>This calculator predicts early and late mortality in patients with cirrhosis undergoing major surgery.</li>\n<li>By definition, patients with cirrhosis must have an <b>ASA class</b> of 3 or more.</li>\n<li>Patients with <b>ASA class</b> of 5 should not undergo surgery.</li>\n\n</ul>\n</div>\n\n\n<div id=\"calc_tables\">\n\n</div>\n\n<br />&nbsp;<br />\n\n<div id=\"calc_refs\">\n<span class=\"medCalcFontRef\"><b>References</b></span>\n<ol>\n<li><span class=\"medCalcFontRef\">Teh SH, Nagorney DM, Stevens SR, et. al. Risk factors for mortality after surgery in patients with cirrhosis. <i> Gastroenterology</i>. 2007 Apr;132(4):1261-9. Epub 2007 Jan 25.</span></li>\n\n</ol>\n</div>\n\n</form>\n\n</div>\n</div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"printDisclaimer\">\r\n\t<b>Only digits 0 to 9 and a single decimal point (&quot;.&quot;) are acceptable as numeric inputs. Attempted input of other characters into a numeric field may lead to an incorrect result.</b>\r\n\t<p>\r\n\tInformation on this page may not appear correctly if printed. </p>\r\n</div>\r\n<div id=\"disclaimerCalculator\">\r\n\t<div class=\"medCalcFontTwo\">\r\n\t\t<p class=\"header\">Legal Notices and Disclaimer</p>\r\n\t\t<p>\r\n\t\t\tAll information contained in and produced by the EBMcalc system is provided\r\n\t\t\tfor educational purposes only. This information should not be used for the diagnosis or treatment\r\n\t\t\tof any health problem or disease. \r\n\t\t\t<b>THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.</b>\r\n\t\t\t<a href=\"https://www.uptodate.com/legal/ebmcalc-disclaimer\" class=\"medCalcDisclaimerLink\">Click here for full notice and disclaimer.</a>\r\n\t\t</p>\r\n\t\t<p class=\"copy\">EBMcalc is Copyright &copy; 1998-2018 Foundation Internet Services, LLC</p>\r\n\t</div>\r\n</div><div id=\"topicVersionRevision\">Topic 83268 Version 3.0</div></div>","outline":null,"javascript":"\n/* <![CDATA[ */\n\nvar lastChar = '';\n\nfunction log(i){\nreturn Math.log(i) * Math.LOG10E;   \n}\n\nfunction ln(i){\nreturn Math.log(i);\n}\n\nfunction sq(i){\nreturn i * i;\n}\n\nfunction sqr(i){\nreturn Math.sqrt(i);\n}\n\n\nfunction power(x,y){\nreturn Math.pow(x,y);\n}\n\nfunction eTo(x){\nreturn Math.exp(x);\n}\n\n\nfunction fixDP(r, dps) {\nif (isNaN(r)) return \"NaN\";\nvar msign = '';\nif (r < 0) msign = '-';\nx = Math.abs(r);\nif (x > Math.pow(10, 21)) return msign + x.toString();\nvar m = Math.round(x * Math.pow(10, dps)).toString();\nif (dps == 0) return msign + m;\nwhile (m.length <= dps) m = \"0\" + m;\nreturn msign + m.substring(0, m.length - dps) + \".\" + m.substring(m.length - dps);\n}\n\nfunction alertNaN(){\nalert('This field is improperly formatted. You may only input the digits 0-9 and a decimal point.');  \ndoCalc = false; \nclrResults();\n}\n\nfunction validNumberField(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\nvar val = field.value;\nvar charCode = event.charCode;\nvar key = String.fromCharCode(charCode);\n\nif(charCode == 0 || charCode == 13) {\n  return true;\n}\n\nif(key == ' ') {\nalert('Numeric field cannot contain spaces.');\n  return false;\n}\t\n\t\t\nif(key == '.') { return validDecimalPoint(val, key); }\nif(key == '-') { return validMinus(val, key); }\n\nif(isNaN(parseInt(key))) {\nalertNaN();\nreturn false;\n}\n\t\nreturn validFloat(val, key);\n}\nreturn true;\n}\n\nfunction validDecimalPoint(val, key) {\nif(val.length == 0 && lastChar != '.') {\n  lastChar = '.';\n  return true;\n}\nif(val.indexOf('.') >= 0 || lastChar == '.') {\n alertNaN();\n return false;\n}\nif(validFloat(val, key)) {\n lastChar = key;\n return true;\n}\nlastChar = '';\nreturn false;\n}\n\nfunction validMinus(val, key) {\nif(val.length == 0) {\n  return true;\n}\nif(val.length > 1) {\n alertNaN();\n return false;\n}\nreturn validFloat(val, key);\n}\n\n\nfunction validFloat(val, key) {\nvar currentVal = parseFloat(val + key);\nif(isNaN(val + key) || isNaN(currentVal)) {\nalertNaN();\nreturn false;\n}\nreturn true;\n}\n\nfunction formKeyDown(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\n  var val = field.value;\n  var keyCode = event.keyCode;\n  if(keyCode == 8 || keyCode == 127) {\n    // backspace or delete\n    if(lastChar == '.') {\n      lastChar = '';\n    }\n    if(field.value.length == 3 && field.value[0] == '0' && field.value[1] == '.') {\n      // this handles a backspace on an input like \".5\", which is saved internally as \"0.5\"\n      //   otherwise, if you leave the field after the backspace, it retains \"0.5\" as the value, most likely an iOS bug\n      field.value = ''; \n    }\n  }\n}\nclrResults();\n}\n\nfunction clrValue(field) {\n field.value = '';\n lastChar = '';\n}\n\nvar currenttimeout;\n\n\nvar calctxt = ''; \nvar xmltxt = ''; \nvar xmlresult = '';\nvar htmtxt = ''; \nvar postNow = false;\n\n\nfunction MELD9_SI_fx() {\ncurrenttimeout = self.setTimeout('minMaxCheck();', 2000);\n\nwith(document.MELD9_SI_form){\n\n\ndoCalc = true;\nparam_value = parseFloat(Age_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Age_unit.options[Age_unit.selectedIndex].value.split('|');\nAge = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nrbchk = false;\nif (ASA_class_radio[0].checked){ rbchk = true; ASA_class = 3;  }\nif (ASA_class_radio[1].checked){ rbchk = true; ASA_class = 4;  }\nif (!rbchk) doCalc = false;\nparam_value = parseFloat(Bilirubin_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Bilirubin_unit.options[Bilirubin_unit.selectedIndex].value.split('|');\nBilirubin = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nparam_value = parseFloat(Creatinine_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Creatinine_unit.options[Creatinine_unit.selectedIndex].value.split('|');\nCreatinine = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nparam_value = parseFloat(INR_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nINR = param_value;\nrbchk = false;\nif (Cirrhosis_etiology_radio[0].checked){ rbchk = true; Cirrhosis_etiology = 0;  }\nif (Cirrhosis_etiology_radio[1].checked){ rbchk = true; Cirrhosis_etiology = 1;  }\nif (!rbchk) doCalc = false;\ndp = 0;\nMELD_score =  Math.round(10 * ((1.12 * ln(INR)) + (0.378 * ln(Bilirubin / 17.1)) + (0.957 * ln(Creatinine / 88.4)) + (0.643 * Cirrhosis_etiology)));\n\nif (doCalc) MELD_score_param.value = fixDP(MELD_score, dp);\n\n\n\nASAPlus = 0; ASAMort = 0; AgePlus = 0;\nif (ASA_class == 4){ ASAPlus = 5; ASAMort = 1; }\nif(Age > 70) AgePlus = 3;\nif (MELD_score < 8){ Adjusted_MELD_score = 8; } else { Adjusted_MELD_score = MELD_score; }\nAdjusted_MELD_score =  Adjusted_MELD_score + AgePlus + ASAPlus;\n\nExpDays =  eTo((0.02382 * (Age - 60)) + (0.88884 * ASAMort) + (0.11798 * (MELD_score - 8)));\n\nMortality_7_days =  100 * (1 - power(0.98370, ExpDays));\n\nif (doCalc) Mortality_7_days_param.value = fixDP(Mortality_7_days, dp);\n\n\n\nMortality_30_days =  100 * (1 - power(0.93479, ExpDays));\n\nif (doCalc) Mortality_30_days_param.value = fixDP(Mortality_30_days, dp);\n\n\n\nMortality_90_days =  100 * (1 - power(0.89681, ExpDays));\n\nif (doCalc) Mortality_90_days_param.value = fixDP(Mortality_90_days, dp);\n\n\n\n\n\n}\n\n}\n\nfunction minMaxCheck(){\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.MELD9_SI_form){\n\nif (Age_param.value && isNaN(Age_param.value)){ clrValue(Age_param); alertNaN('Age'); }\nif (Age_param.value && Age < 12) {\nAge = 0;\nclrValue(Age_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for Age is 12 yr.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Age_param.value && Age > 120) {\nclrValue(Age_param);\nclrResults();\nAge = 0;\ndoCalc = false;\n alert(\"The maximum value for Age is 120 yr.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Bilirubin_param.value && isNaN(Bilirubin_param.value)){ clrValue(Bilirubin_param); alertNaN('Bilirubin'); }\nif (Bilirubin_param.value && Bilirubin < 1.71) {\nBilirubin = 0;\nclrValue(Bilirubin_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for Bilirubin is 1.71 mcmol/L.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Bilirubin_param.value && Bilirubin > 598.5) {\nclrValue(Bilirubin_param);\nclrResults();\nBilirubin = 0;\ndoCalc = false;\n alert(\"The maximum value for Bilirubin is 598.5 mcmol/L.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Creatinine_param.value && isNaN(Creatinine_param.value)){ clrValue(Creatinine_param); alertNaN('Creatinine'); }\nif (Creatinine_param.value && Creatinine < 8.84) {\nCreatinine = 0;\nclrValue(Creatinine_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for Creatinine is 8.84 mcmol/L.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Creatinine_param.value && Creatinine > 353.6) {\nclrValue(Creatinine_param);\nclrResults();\nCreatinine = 0;\ndoCalc = false;\n alert(\"The maximum value for Creatinine is 353.6 mcmol/L.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (INR_param.value && isNaN(INR_param.value)){ clrValue(INR_param); alertNaN('INR'); }\nif (INR_param.value && INR < 0.5) {\nINR = 0;\nclrValue(INR_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for INR is 0.5 .\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (INR_param.value && INR > 10) {\nclrValue(INR_param);\nclrResults();\nINR = 0;\ndoCalc = false;\n alert(\"The maximum value for INR is 10 .\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\n\n\n}\n\n}\n\nfunction clrResults(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.MELD9_SI_form){\n\nMELD_score_param.value = '';\nMortality_7_days_param.value = '';\nMortality_30_days_param.value = '';\nMortality_90_days_param.value = '';\n\n\n}\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* ]]> */\n"}
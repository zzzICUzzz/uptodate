var data={"title":"Calculator: Estimated protein excretion rate from spot urine protein and creatinine for adults","body":"<div id=\"topicContentCalculator\" class=\"utdArticleSection\"><div id=\"topicText\">\n<div id=\"mc3k\">\n\n\n\n\n<form name=\"EstimatedProtEx_form\" id=\"EstimatedProtEx_form\" action=\"\" onsubmit=\"return false;\" onkeydown=\"formKeyDown(event);\" onkeypress=\"return validNumberField(event);\" onkeyup=\"EstimatedProtEx_fx();\">\n\n<table width=\"100%\" cellpadding=\"4\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td bgcolor=\"#eeeeee\" width=\"1%\"><br /></td>\n<td bgcolor=\"#eeeeee\" align=\"left\">\n<span class=\"medCalcFontTitleBox\">\n\n \nCalculator: Estimated protein excretion rate from spot urine protein and creatinine for adults\n</span></td></tr></table><br />&nbsp;<br />\n\n<center>\n<div id=\"calc_equation\">\n<table cellspacing=\"0\" cellpadding=\"10\" summary=\"MedCalc 3000 Table\"><tr><td align=\"left\" bgcolor=\"#6c9a9c\"><span class=\"medCalcFontFormuli\">Estimatedproteinexcretionrate = (Spoturineprotein / Spoturinecreatinine) * Estimatedcreatinineexcretionrate</span></td></tr></table><br />&nbsp;<br />\n</div>\n</center>\n\n<div id=\"calc_main\">\n<center><table cellpadding=\"6\" cellspacing=\"0\" width=\"95%\" summary=\"MedCalc 3000 Table\"><tr><td align=\"right\" width=\"50%\">\n<center>\n<span class=\"medCalcFontIO\">\nInput:\n</span>\n<br />&nbsp;<br />\n<table cellpadding=\"3\" cellspacing=\"0\" summary=\"MedCalc 3000 Table\">\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Age</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Age_param\" size=\"6\" value=\"\" onblur=\"EstimatedProtEx_fx(); minMaxCheck();\" onchange=\"EstimatedProtEx_fx();\" /></td>\n<td align=\"left\" width=\"100\" valign=\"top\"> <span style=\"white-space: nowrap;\"><span class=\"medCalcFontOneBold\">yr</span>\n</span> </td></tr>\n\n<tr><td align=\"right\" valign=\"top\"><span class=\"medCalcFontOneBold\">Sex</span></td>\n<td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"Sex_radio\" value=\"Female|1\" onclick=\"EstimatedProtEx_fx();\" /> Female</span></td></tr>\n<tr><td align=\"left\"><br /></td><td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"Sex_radio\" value=\"Male|2\" onclick=\"EstimatedProtEx_fx();\" /> Male</span></td></tr>\n<tr><td align=\"right\" valign=\"top\"><span class=\"medCalcFontOneBold\">Race</span></td>\n<td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"Race_radio\" value=\"Black|1\" onclick=\"EstimatedProtEx_fx();\" /> Black</span></td></tr>\n<tr><td align=\"left\"><br /></td><td colspan=\"2\" align=\"left\"><span class=\"medCalcFontOne\"><input type=\"radio\" name=\"Race_radio\" value=\"Nonblack|2\" onclick=\"EstimatedProtEx_fx();\" /> Nonblack</span></td></tr>\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Spot urine protein</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Spot_urine_protein_param\" size=\"6\" value=\"\" onblur=\"EstimatedProtEx_fx(); minMaxCheck();\" onchange=\"EstimatedProtEx_fx();\" /></td>\n<td align=\"left\" width=\"100\" valign=\"top\"> <select name=\"Spot_urine_protein_unit\" onchange=\"EstimatedProtEx_fx();\" style=\"width:90px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|mg/dL\" selected=\"selected\">mg/dL</option>\n<option value=\"0.1|0|mg/L\">mg/L</option>\n</select> </td></tr>\n\n<tr><td align=\"right\" width=\"42%\"><span class=\"medCalcFontOneBold\">Spot urine creatinine</span> </td>\n<td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"5%\">&nbsp; <input type=\"text\" name=\"Spot_urine_creatinine_param\" size=\"6\" value=\"\" onblur=\"EstimatedProtEx_fx(); minMaxCheck();\" onchange=\"EstimatedProtEx_fx();\" /></td>\n<td align=\"left\" width=\"100\" valign=\"top\"> <select name=\"Spot_urine_creatinine_unit\" onchange=\"EstimatedProtEx_fx();\" style=\"width:90px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|mg/dL_UCr\" selected=\"selected\">mg/dL</option>\n<option value=\"11.3122171945701|0|mmol/L_UCr\">mmol/L</option>\n<option value=\"0.0113122171945701|0|mcmol/L_UCr\">mcmol/L</option>\n</select> </td></tr>\n\n\n</table>\n</center>\n</td><td align=\"left\" bgcolor=\"#eeeeee\">\n<center><span class=\"medCalcFontIO\">Results:</span>\n\n<br />&nbsp;<br />\n<table bgcolor=\"#eeeeee\" summary=\"MedCalc 3000 Table\" cellspacing=\"4\">\n<tr>\n<td align=\"right\"><span class=\"medCalcFontOneBold\">Estimated protein excretion rate</span></td>\n<td valign=\"top\" nowrap=\"nowrap\">&nbsp; <input type=\"text\" name=\"Estimated_protein_excretion_rate_param\" size=\"6\" onfocus=\"blur();\" /></td>\n<td valign=\"top\"><span class=\"medCalcFontOne\">\n<select name=\"Estimated_protein_excretion_rate_unit\" onchange=\"EstimatedProtEx_fx();\" style=\"width:90px;\" class=\"medCalcFontSelect\">\n<option value=\"1|0|mg/day\" selected=\"selected\">mg/day</option>\n<option value=\"1000|0|g/day\">g/day</option>\n</select>\n</span></td>\n</tr>\n\n\n<tr><td colspan=\"3\">&nbsp;<br /></td></tr>\n<tr><td colspan=\"3\" align=\"center\"><span class=\"medCalcFontOneBold\">Decimal precision:</span>\n<select name=\"decpts\" onchange=\"EstimatedProtEx_fx();\" class=\"medCalcFontSelect\">\n<option>0</option>\n<option>1</option>\n<option selected=\"selected\">2</option>\n<option>3</option>\n\n</select></td></tr>\n\n</table>\n</center><br />&nbsp;<br />\n<div id=\"calc_buttons\">\n<center>\n<span class=\"medCalcFontOne\">\n\n\n\n\n\n<input type=\"reset\" name=\"reset\" value=\"Reset form\" />\n</span>\n</center>\n</div>\n</td></tr></table>\n</center>\n\n\n\n</div>\n<div id=\"calc_notes\">\n<span class=\"medCalcFontOneBold\">Notes</span>\n<ul class=\"medCalcFontOne\">\n<li>The normal urine protein excretion rate is less than 150 mg/day.</li>\n<li>Rates of 3500 mg/day or higher are called \"nephrotic range proteinuria.\"</li>\n<li>The estimated creatinine excretion rate has not been validated in a pediatric population (age &lt;19 years).</li>\n\n</ul>\n</div>\n\n<br />&nbsp;<br />\n\n<div id=\"calc_refs\">\n<span class=\"medCalcFontRef\"><b>References</b></span>\n<ol>\n<li><span class=\"medCalcFontRef\">Fotheringham J, Campbell MJ, Fogarty DG, et al. Estimated albumin excretion rate versus urine  albumin-creatinine ratio for the estimation of measured albumin excretion rate: derivation and  validation of an estimated albumin excretion rate equation. <i>Am J Kidney Dis</i>. 2014; 63(3):405.</span></li>\n\n</ol>\n</div>\n\n</form>\n\n</div>\n</div><div id=\"topicAgreement\">Use of UpToDate is subject to the <a href=\"https://www.uptodate.com/legal/license\" class=\"licenseLink\" id=\"sla_in_page\">Subscription and License Agreement</a>.</div><div id=\"printDisclaimer\">\r\n\t<b>Only digits 0 to 9 and a single decimal point (&quot;.&quot;) are acceptable as numeric inputs. Attempted input of other characters into a numeric field may lead to an incorrect result.</b>\r\n\t<p>\r\n\tInformation on this page may not appear correctly if printed. </p>\r\n</div>\r\n<div id=\"disclaimerCalculator\">\r\n\t<div class=\"medCalcFontTwo\">\r\n\t\t<p class=\"header\">Legal Notices and Disclaimer</p>\r\n\t\t<p>\r\n\t\t\tAll information contained in and produced by the EBMcalc system is provided\r\n\t\t\tfor educational purposes only. This information should not be used for the diagnosis or treatment\r\n\t\t\tof any health problem or disease. \r\n\t\t\t<b>THIS INFORMATION IS NOT INTENDED TO REPLACE CLINICAL JUDGMENT OR GUIDE INDIVIDUAL PATIENT CARE IN ANY MANNER.</b>\r\n\t\t\t<a href=\"https://www.uptodate.com/legal/ebmcalc-disclaimer\" class=\"medCalcDisclaimerLink\">Click here for full notice and disclaimer.</a>\r\n\t\t</p>\r\n\t\t<p class=\"copy\">EBMcalc is Copyright &copy; 1998-2018 Foundation Internet Services, LLC</p>\r\n\t</div>\r\n</div><div id=\"topicVersionRevision\">Topic 95018 Version 2.0</div></div>","outline":null,"javascript":"\n/* <![CDATA[ */\n\nvar lastChar = '';\n\nfunction log(i){\nreturn Math.log(i) * Math.LOG10E;   \n}\n\nfunction ln(i){\nreturn Math.log(i);\n}\n\nfunction sq(i){\nreturn i * i;\n}\n\nfunction sqr(i){\nreturn Math.sqrt(i);\n}\n\n\nfunction power(x,y){\nreturn Math.pow(x,y);\n}\n\nfunction eTo(x){\nreturn Math.exp(x);\n}\n\n\nfunction fixDP(r, dps) {\nif (isNaN(r)) return \"NaN\";\nvar msign = '';\nif (r < 0) msign = '-';\nx = Math.abs(r);\nif (x > Math.pow(10, 21)) return msign + x.toString();\nvar m = Math.round(x * Math.pow(10, dps)).toString();\nif (dps == 0) return msign + m;\nwhile (m.length <= dps) m = \"0\" + m;\nreturn msign + m.substring(0, m.length - dps) + \".\" + m.substring(m.length - dps);\n}\n\nfunction alertNaN(){\nalert('This field is improperly formatted. You may only input the digits 0-9 and a decimal point.');  \ndoCalc = false; \nclrResults();\n}\n\nfunction validNumberField(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\nvar val = field.value;\nvar charCode = event.charCode;\nvar key = String.fromCharCode(charCode);\n\nif(charCode == 0 || charCode == 13) {\n  return true;\n}\n\nif(key == ' ') {\nalert('Numeric field cannot contain spaces.');\n  return false;\n}\t\n\t\t\nif(key == '.') { return validDecimalPoint(val, key); }\nif(key == '-') { return validMinus(val, key); }\n\nif(isNaN(parseInt(key))) {\nalertNaN();\nreturn false;\n}\n\t\nreturn validFloat(val, key);\n}\nreturn true;\n}\n\nfunction validDecimalPoint(val, key) {\nif(val.length == 0 && lastChar != '.') {\n  lastChar = '.';\n  return true;\n}\nif(val.indexOf('.') >= 0 || lastChar == '.') {\n alertNaN();\n return false;\n}\nif(validFloat(val, key)) {\n lastChar = key;\n return true;\n}\nlastChar = '';\nreturn false;\n}\n\nfunction validMinus(val, key) {\nif(val.length == 0) {\n  return true;\n}\nif(val.length > 1) {\n alertNaN();\n return false;\n}\nreturn validFloat(val, key);\n}\n\n\nfunction validFloat(val, key) {\nvar currentVal = parseFloat(val + key);\nif(isNaN(val + key) || isNaN(currentVal)) {\nalertNaN();\nreturn false;\n}\nreturn true;\n}\n\nfunction formKeyDown(event) {\nvar field = event.target;\n\nif(field && field != 'undefined' && field.attributes.type.nodeValue && (field.attributes.type.nodeValue == 'number')) {\n  var val = field.value;\n  var keyCode = event.keyCode;\n  if(keyCode == 8 || keyCode == 127) {\n    // backspace or delete\n    if(lastChar == '.') {\n      lastChar = '';\n    }\n    if(field.value.length == 3 && field.value[0] == '0' && field.value[1] == '.') {\n      // this handles a backspace on an input like \".5\", which is saved internally as \"0.5\"\n      //   otherwise, if you leave the field after the backspace, it retains \"0.5\" as the value, most likely an iOS bug\n      field.value = ''; \n    }\n  }\n}\nclrResults();\n}\n\nfunction clrValue(field) {\n field.value = '';\n lastChar = '';\n}\n\nvar currenttimeout;\n\n\nvar calctxt = ''; \nvar xmltxt = ''; \nvar xmlresult = '';\nvar htmtxt = ''; \nvar postNow = false;\n\nfunction EstimatedProtEx_fx() {\ncurrenttimeout = self.setTimeout('minMaxCheck();', 2000);\n\nwith(document.EstimatedProtEx_form){\n\n\ndoCalc = true;\nparam_value = parseFloat(Age_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nAge = param_value;\nrbchk = false;\nif (Sex_radio[0].checked){ rbchk = true; Sex = 1;  }\nif (Sex_radio[1].checked){ rbchk = true; Sex = 2;  }\nif (!rbchk) doCalc = false;\nrbchk = false;\nif (Race_radio[0].checked){ rbchk = true; Race = 1;  }\nif (Race_radio[1].checked){ rbchk = true; Race = 2;  }\nif (!rbchk) doCalc = false;\nparam_value = parseFloat(Spot_urine_protein_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Spot_urine_protein_unit.options[Spot_urine_protein_unit.selectedIndex].value.split('|');\nSpot_urine_protein = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\nparam_value = parseFloat(Spot_urine_creatinine_param.value);\nif (isNaN(param_value)){param_value = \"\"; doCalc = false;}\nunit_parts = Spot_urine_creatinine_unit.options[Spot_urine_creatinine_unit.selectedIndex].value.split('|');\nSpot_urine_creatinine = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);\ndp = decpts.options[decpts.selectedIndex].text;\nvar Estimated_creatinine_excretion_rate;\nif ((Sex == 1) && (Race == 1)) Estimated_creatinine_excretion_rate = 1148.6 + (15.6 * Age) - (0.3 * Age * Age);\nif ((Sex == 1) && (Race == 2)) Estimated_creatinine_excretion_rate = 1051.3 + (5.3 * Age) - (0.1 * Age * Age);\nif ((Sex == 2) && (Race == 1)) Estimated_creatinine_excretion_rate = 1413.9 + (23.2 * Age) - (0.3 * Age * Age);\nif ((Sex == 2) && (Race == 2)) Estimated_creatinine_excretion_rate = 1307.3 + (23.1 * Age) - (0.3 * Age * Age);\nEstimated_protein_excretion_rate =  (Spot_urine_protein / Spot_urine_creatinine) * Estimated_creatinine_excretion_rate;\n\nunit_parts = Estimated_protein_excretion_rate_unit.options[Estimated_protein_excretion_rate_unit.selectedIndex].value.split('|');\nif (doCalc) Estimated_protein_excretion_rate_param.value = fixDP((Estimated_protein_excretion_rate - parseFloat(unit_parts[1])) / parseFloat(unit_parts[0]), dp);\n\n\n\n\n\n}\n\n}\n\nfunction minMaxCheck(){\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.EstimatedProtEx_form){\n\nif (Age_param.value && isNaN(Age_param.value)){ clrValue(Age_param); alertNaN('Age'); }\nif (Age_param.value && Age < 19) {\nAge = 0;\nclrValue(Age_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for Age is 19 yr.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Age_param.value && Age > 120) {\nclrValue(Age_param);\nclrResults();\nAge = 0;\ndoCalc = false;\n alert(\"The maximum value for Age is 120 yr.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Spot_urine_protein_param.value && isNaN(Spot_urine_protein_param.value)){ clrValue(Spot_urine_protein_param); alertNaN('Spot urine protein'); }\nif (Spot_urine_creatinine_param.value && isNaN(Spot_urine_creatinine_param.value)){ clrValue(Spot_urine_creatinine_param); alertNaN('Spot urine creatinine'); }\nif (Spot_urine_creatinine_param.value && Spot_urine_creatinine < 10) {\nSpot_urine_creatinine = 0;\nclrValue(Spot_urine_creatinine_param);\nclrResults();\ndoCalc = false;\n alert(\"The minimum value for Spot urine creatinine is 10 mg/dL.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\nif (Spot_urine_creatinine_param.value && Spot_urine_creatinine > 500) {\nclrValue(Spot_urine_creatinine_param);\nclrResults();\nSpot_urine_creatinine = 0;\ndoCalc = false;\n alert(\"The maximum value for Spot urine creatinine is 500 mg/dL.\\nIf you are specifying a value with a different unit,\\nchange the unit selector first.\");\n}\n\n\n}\n\n}\n\nfunction clrResults(){\n\nif (currenttimeout) self.clearTimeout(currenttimeout);\n\nwith(document.EstimatedProtEx_form){\n\nEstimated_protein_excretion_rate_param.value = '';\n\n\n}\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* ]]> */\n"}
const data = require("../data_business");
const checkInclude = (a, b) => {
    for (const char of a) {
        if (b.includes(char)) {
            b = b.replace(char, '');
        } else {
            return false;
        }
    }
    console.log(b.length)
    return true;
}
const compareText = (a, b) => {
    if (a !== b) {
        return false;
    }
    return true;
}
const checkFace = (a, b) => {
    let distance = (Math.abs(a - b) / Math.abs(a)) * 100;
    if (distance > 10) {
        return false;
    }
    return true;
}

exports.verify = async (req, res) => {
    let request = req.body;
    let check = false;
    try {
        for (const item of data) {
            if (request.string_check.includes("IELTS")) {
                if (item.CandidateNumber === request.CandidateNumber) {
                    if (
                        checkFace(item.rollAngle, request.rollAngle) &&
                        checkFace(item.panAngle, request.panAngle) &&
                        checkFace(item.tiltAngle, request.tiltAngle) &&
                        compareText(item.centreNumber, request.centreNumber) &&
                        compareText(item.Date_Exam, request.Date_Exam) &&
                        compareText(item.Birth, request.Birth) &&
                        compareText(item.CEFR, request.CEFR) &&
                        checkInclude(item.Listening, request.string_check) &&
                        checkInclude(item.Reading, request.string_check) &&
                        checkInclude(item.Writing, request.string_check) &&
                        checkInclude(item.Speaking, request.string_check) &&
                        checkInclude(item.Overall, request.string_check) &&
                        checkInclude(item.Date_Sign, request.string_check) &&
                        checkInclude(item.CandidateId, request.string_check) &&
                        checkInclude(item.ReportFormNumber, request.string_check) &&
                        checkInclude(item.Sex, request.string_check)
                    ) {
                        check = true;
                        break;
                    }
                }
            } else if (request.string_check.includes("ĐỘC QUYỀN")) {
                if (item.Number === request.Number) {
                    if (
                        checkInclude(item.NumberCert, request.string_check) &&
                        checkInclude(item.Name, request.string_check) &&
                        checkInclude(item.Owner, request.string_check) &&
                        checkInclude(item.Address, request.string_check) &&
                        checkInclude(item.Creator, request.string_check) &&
                        checkInclude(item.DateSubmit, request.string_check) &&
                        checkInclude(item.TotalPage, request.string_check)
                    ) {
                        check = true;
                        break;
                    }
                }
            } else if (request.string_check.includes("Certificate") || request.string_check.includes("CERTIFICATE") || request.string_check.includes("certificate")) {
                if (item.Series === request.Series) {
                    if (
                        checkInclude(item.NameProgram, request.string_check) &&
                        checkInclude(item.Organization, request.string_check) &&
                        checkInclude(item.SeriesOrg, request.string_check)
                    ) {
                        check = true;
                        break;
                    }
                }
            }
        }
        check ? res.json({ status: true }) : res.json({ status: false });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error, status: false });
    }
}

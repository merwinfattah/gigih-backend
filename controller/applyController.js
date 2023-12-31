const {saveApplyFranchise, addHistory} = require('../services/applyService');

async function postFranchiseApplication(req, res, next) {
    try {
        const newApplication = {
            franchisee_id: req.body.franchisee_id,
            franchisee_name: req.body.franchisee_name,
            franchisee_address: req.body.franchisee_address,
            franchisee_placeDateBirth: req.body.franchisee_placeDateBirth,
            franchisee_phone: req.body.franchisee_phone,
            franchise_name: req.body.franchise_name,
            franchise_address: req.body.franchise_address,
            franchise_phone: req.body.franchise_phone,
            funding_capital: req.body.funding_capital
        };

        const newHistory = {
            userId: req.body.franchisee_id,
            applicationDate: new Date(),
            franchiseName: req.body.franchise_name,
            franchiseAddress: req.body.franchise_address,
            franchisePhone: req.body.franchise_phone,
            status: 'waiting'
        }

        const saveApplication = await saveApplyFranchise(newApplication);
        await addHistory(newHistory);
        res.status(200).json(saveApplication);
    } catch (error) {
        res.status(500).json({ message: `controller post apply ${error.message}`});
    }
}

// async function postHistory(req, res, next) {
//     try {
//         const newHistory = {
//             userId: req.body.franchisee_id,
//             applicationDate: new Date(),
//             franchiseName: req.body.franchise_name,
//             franchiseAddress: req.body.franchise_address,
//             franchisePhone: req.body.franchise_phone,
//             status: 'waiting'
//         }
        
//         await addHistory(newHistory);
//         // const saveHistory = await addHistory(newHistory);
//         // res.status(201).json(saveHistory)
//     }
//     catch (error) {
//         res.status(500).json({ message: `controller post history ${error.message}`});
//     }
// }

module.exports = {postFranchiseApplication};
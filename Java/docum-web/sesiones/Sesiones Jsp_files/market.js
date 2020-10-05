var rp_response = 
    { "valuation": { "pmp": { }, "ads": [ { "type": "partner", "cpm": 0.000230, "dcpm": 0.000230, "fcc": 0, "fcl": 3, "fcp": 86400, "ad_id": 3286256 }, { "type": "partner", "cpm": 0.069490, "dcpm": 0.069490, "ad_id": 3351289 }, { "type": "partner", "cpm": 0.020110, "dcpm": 0.020110, "fcc": 0, "fcl": 4, "fcp": 86400, "ad_id": 3438388 } ], "rtb_coeffs": { "2307": { "vec": [ 0.018449, 0.013279, 0.004760, 0.008699, -0.002966, 0.014275, 0.012146, 0.037679, 0.028885, 0.008203, 0.015192, -0.001517, 0.009712, 0.007033, 0.007645, 0.015461, 0.018888, 0.009921, 0.024320, 0.010030, 0.009472, 0.001638, 0.018111, 0.016311, 0.012975, 0.006338, 0.008453, 0.007101, 0.030384, 0.000000, 0.000000 ], "conf": -1, "ttl": -1 }, "2132": { "vec": [ -0.000045, 0.000006, -0.000002, 0.000001, 0.000000, -0.000006, -0.000005, -0.000023, -0.000004, -0.000003, -0.000013, -0.000010, -0.000012, -0.000003, 0.000000, 0.000001, 0.000000, 0.000000, -0.000009, -0.000001, 0.000010, -0.000001, 0.000226, -0.000079, -0.000055, -0.000036, -0.000003, -0.000012, -0.000009, 0.000000, 0.000000 ], "conf": -1, "ttl": -1 }, "1986": { "vec": [ 0.007920, 0.009955, -0.000108, -0.000162, 0.000000, 0.034171, 0.016845, 0.014591, 0.016440, 0.019823, 0.016127, 0.035142, 0.011665, 0.014433, 0.013368, 0.006968, -0.005222, -0.001155, -0.002584, -0.000329, -0.001981, -0.001673, 0.000368, -0.003168, -0.000953, -0.000809, 0.013699, -0.000293, 0.005542, 0.000000, 0.000000 ], "conf": -1, "ttl": -1 }, "1185": { "vec": [ -0.011072, 0.033395, -0.000019, -0.000007, 0.000000, 0.020125, 0.020128, 0.020241, 0.049328, 0.018958, 0.016086, 0.017329, 0.024158, 0.045661, 0.032370, 0.010274, 0.002255, 0.004204, 0.003569, 0.004647, 0.009996, 0.005873, 0.014984, 0.006734, 0.005986, 0.006968, 0.017269, 0.005643, 0.006325, 0.000000, 0.000000 ], "conf": -1, "ttl": -1 }, "2249": { "vec": [ 0.001860, 0.002009, -0.000032, 0.000003, 0.000000, 0.001299, 0.000277, 0.000934, 0.000197, 0.000034, -0.000468, 0.008344, -0.003988, -0.002405, -0.001529, -0.001382, 0.002850, -0.001827, -0.000628, -0.000303, 0.000223, 0.000283, 0.000628, 0.000600, 0.000672, 0.000843, 0.008667, 0.002696, -0.000588, 0.000000, 0.000000 ], "conf": -1, "ttl": -1 }, "2238": { "vec": [ 0.002644, 0.002974, 0.000013, 0.000004, 0.000000, 0.001251, 0.001373, 0.001026, 0.001244, 0.000553, 0.002495, 0.001928, 0.001889, 0.001538, -0.000455, -0.000602, 0.001442, 0.001122, 0.001616, 0.001044, 0.001362, 0.001644, 0.002979, 0.001343, 0.002448, 0.002070, 0.001097, 0.001235, 0.001582, 0.000000, 0.000000 ], "conf": -1, "ttl": -1 }, "2101": { "vec": [ 0.025606, 0.008328, -0.000100, 0.000008, 0.000000, -0.001432, -0.001370, -0.001359, -0.001759, 0.001357, -0.004148, -0.002480, -0.002137, 0.009226, -0.004131, -0.002295, 0.004198, 0.003033, 0.003501, 0.003237, 0.014426, 0.002252, 0.002395, 0.002148, 0.020816, -0.005697, 0.014092, 0.002118, 0.005350, 0.000000, 0.000000 ], "conf": -1, "ttl": -1 }, "1512": { "vec": [ -0.010130, 0.010225, -0.002076, -0.000012, -0.000073, -0.000616, -0.000281, -0.000369, -0.000291, 0.000335, 0.000122, -0.000438, 0.001364, -0.002858, -0.001323, 0.015510, -0.002408, 0.003021, 0.005560, 0.004475, 0.010744, 0.004262, 0.009570, 0.001611, 0.007877, 0.003411, 0.004205, 0.006854, 0.006808, 0.000000, 0.000000 ], "conf": -1, "ttl": -1 }, "meta": { "algorithm": "randomized" } }, "cpm_cnt": 3, "invalid_cpm_cnt": 0, "bid_cnt": 0, "invalid_bid_cnt": 0 }, "context": { "site_session_count": "0", "country": "pe" } };

var rp_valuation = rp_response.valuation;
try { oz_onValuationLoaded(rp_response); } catch (ignore) {}

/*
Data Center: 
pid: 14148
BE Status: O
BEms: 10
AEms: 13
Alg: PT
Session Count: 1
Continent: sa
Country: pe
*/

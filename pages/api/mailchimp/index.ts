import axios from "axios"

function getRequestParams(email) {
    // get env variables
    const API_KEY = "51401f669b13f75dabb6308beb6cc7b3-us1"
    const AUDIENCE_ID = "ed99723c57"

    const DATACENTER = "51401f669b13f75dabb6308beb6cc7b3-us1".split("-")[1]

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

    const data = {
        email_address: email,
        status: "subscribed",
    }

    const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64")
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Basic ${base64ApiKey}`,
    }

    return {
        url,
        data,
        headers,
    }
}

export default async (req, res) => {
    const { email } = req.body

    if (!email || !email.length) {
        return res.status(400).json({
        error: "Forgot to add your email?",
        })
    }

    try {
        const { url, data, headers } = getRequestParams(email)

        const response = await axios.post(url, data, { headers })

        // Success
        return res.status(201).json({ error: null })
    } catch (error) {
        return res.status(400).json({
        error: `Erreur survenue`,
        })
    }
}
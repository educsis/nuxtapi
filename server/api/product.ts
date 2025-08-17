export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const response = await $fetch("https://sharpapi.com/api/v1/ecommerce/product_intro", {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: `Bearer Ct2mNMNatB2OaXIalAXEtZ16MAB1UInWiFvveB29`,
        "Content-Type": "application/json",
        "User-Agent": "SharpAPI Playground"
      },
      body
    })

    // const statusUrl = response?.status_url
    const getInfo = '/v1/ecommerce/product_intro/job/status/' + response.job_id

    // if (!statusUrl) {
    //   return { error: "No status_url found in response", raw: response }
    // }

    const statusResult = await $fetch(getInfo, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer Ct2mNMNatB2OaXIalAXEtZ16MAB1UInWiFvveB29`,
        "User-Agent": "SharpAPI Playground"
      }
    })

    return statusResult

  } catch (err: any) {
    return { error: err?.data || err.message }
  }
})



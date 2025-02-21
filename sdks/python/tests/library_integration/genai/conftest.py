import os
import pytest
from ...testlib import patch_environ


@pytest.fixture(autouse=True)
def setup_genai_credentials():
    if not (
        "GOOGLE_CLOUD_PROJECT" in os.environ and "GOOGLE_CLOUD_LOCATION" in os.environ
    ):
        raise Exception(
            "GOOGLE_CLOUD_PROJECT and GOOGLE_CLOUD_LOCATION env vars must be set!"
        )

    if "GITHUB_ACTIONS" not in os.environ:
        if "GOOGLE_APPLICATION_CREDENTIALS" not in os.environ:
            raise Exception("GOOGLE_APPLICATION_CREDENTIALS env var must be configured")
        yield
        return

    if "GCP_CREDENTIALS_JSON" not in os.environ:
        raise Exception(
            "GCP_CREDENTIALS_JSON env var with credentials json content must be set"
        )

    try:
        gcp_credentials = os.environ["GCP_CREDENTIALS_JSON"]
        with open("gcp_credentials.json", mode="wt") as output_file:
            output_file.write(gcp_credentials)

        os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "gcp_credentials.json"

        with patch_environ(
            add_keys={"GOOGLE_APPLICATION_CREDENTIALS": "gcp_credentials.json"}
        ):
            yield
    finally:
        try:
            os.remove("gcp_credentials.json")
        except OSError:
            pass

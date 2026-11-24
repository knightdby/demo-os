#!/usr/bin/env python3
"""Wan3 production entrypoint; credentials read locally from workspace api.yaml."""
from pathlib import Path
import runpy
if __name__=='__main__':
 runpy.run_path(str(Path(__file__).parent/'assets/prevideo/storyboard-forward-v3/revision-v12/scripts/wan_api.py'),run_name='__main__')

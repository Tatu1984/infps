#!/usr/bin/env python3
"""
Hand-drawn (chalkboard sketch) image generator for Infiniti Tech Partners.

Produces, for each insight topic:
  - a 1200x630 website hero  -> public/insights/<slug>.png
  - a 1200x630 LinkedIn card  -> linkedin-assets/li-<n>-<slug>.png

Style: dark "blackboard" background, cream + orange (#ff6b35) marker strokes,
Bradley Hand / Chalkboard SE fonts, and matplotlib's path-sketch wobble so every
box and arrow looks hand-drawn. Re-run any time: `python3 scripts/gen_handdrawn.py`.
"""
import os
import matplotlib
matplotlib.use("Agg")
import matplotlib as mpl
import matplotlib.pyplot as plt
from matplotlib.patches import FancyArrowPatch, Rectangle, Circle

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HERO_DIR = os.path.join(ROOT, "public", "insights")
LI_DIR = os.path.join(ROOT, "linkedin-assets")

BG = "#0b0e16"
CREAM = "#f2ede3"
ORANGE = "#ff6b35"
ORANGE2 = "#ff8f5e"
DIM = "#8a8f9c"
GREEN = "#7ad6a0"
RED = "#ff7a6b"

HEAD = "Bradley Hand"
BODY = "Chalkboard SE"

# Hand-drawn wobble applied to every vector path.
mpl.rcParams["path.sketch"] = (1.6, 110, 36)
mpl.rcParams["font.family"] = BODY


def new_fig():
    fig = plt.figure(figsize=(12, 6.3), dpi=100)
    ax = fig.add_axes([0, 0, 1, 1])
    ax.set_xlim(0, 120)
    ax.set_ylim(0, 63)
    ax.axis("off")
    fig.patch.set_facecolor(BG)
    ax.set_facecolor(BG)
    # faint chalk grain border
    ax.add_patch(Rectangle((1.2, 1.2), 117.6, 60.6, fill=False,
                           edgecolor="#1c2433", lw=1.4))
    return fig, ax


def box(ax, x, y, w, h, color=CREAM, lw=2.6, fill=None, alpha=1.0):
    if fill:
        ax.add_patch(Rectangle((x, y), w, h, facecolor=fill, edgecolor="none",
                               alpha=0.10, zorder=1))
    ax.add_patch(Rectangle((x, y), w, h, fill=False, edgecolor=color, lw=lw,
                           alpha=alpha, zorder=2))


def arrow(ax, x1, y1, x2, y2, color=ORANGE, lw=2.6):
    ax.add_patch(FancyArrowPatch((x1, y1), (x2, y2), arrowstyle="-|>",
                                 mutation_scale=22, lw=lw, color=color,
                                 shrinkA=4, shrinkB=4, zorder=3))


def text(ax, x, y, s, size=15, color=CREAM, font=BODY, weight="normal",
         ha="center", va="center"):
    ax.text(x, y, s, fontsize=size, color=color, fontfamily=font,
            fontweight=weight, ha=ha, va=va, zorder=5)


def infinity(ax, cx, cy, s=1.0, color=ORANGE):
    """Small hand-drawn lemniscate (the orange infinity mark)."""
    import numpy as np
    t = np.linspace(0, 2 * np.pi, 240)
    a = 1.7 * s
    x = cx + a * np.cos(t) / (1 + np.sin(t) ** 2)
    y = cy + a * np.sin(t) * np.cos(t) / (1 + np.sin(t) ** 2)
    ax.plot(x, y, color=color, lw=2.4, solid_capstyle="round", zorder=5)


def brand(ax):
    infinity(ax, 7.2, 4.4, s=1.0, color=ORANGE)
    text(ax, 10.5, 4.3, "INFINITI TECH PARTNERS", size=12.5, color=CREAM,
         font=HEAD, ha="left")


def title_block(ax, kicker, line1, line2=None):
    text(ax, 7, 57.5, kicker, size=13, color=ORANGE2, font=HEAD, ha="left")
    text(ax, 7, 51.5, line1, size=27, color=CREAM, font=HEAD, ha="left",
         weight="bold")
    if line2:
        text(ax, 7, 45.6, line2, size=27, color=CREAM, font=HEAD, ha="left",
             weight="bold")


def save(fig, path):
    fig.savefig(path, facecolor=BG, dpi=100)
    plt.close(fig)
    print("wrote", os.path.relpath(path, ROOT))


# ---------------------------------------------------------------- diagrams
def d_multitenant(ax):
    labels = [("POOLED", "shared DB,\nrow-level security", CREAM, 14),
              ("BRIDGE", "schema\nper tenant", ORANGE2, 50),
              ("SILOED", "stack\nper tenant", ORANGE, 86)]
    for name, sub, col, x in labels:
        box(ax, x, 16, 22, 19, color=col, fill=col)
        text(ax, x + 11, 30, name, size=18, color=col, font=HEAD, weight="bold")
        text(ax, x + 11, 22.5, sub, size=12, color=DIM)
    # little tenant marks inside each
    for i in range(3):
        text(ax, 17 + i * 5, 19.5, "•", size=20, color=CREAM)
    text(ax, 61, 19.5, "▢ ▢", size=13, color=ORANGE2)
    text(ax, 97, 19.5, "▣", size=15, color=ORANGE)
    text(ax, 60, 9.5, "cheaper  +  easier to run    ←————→    stronger isolation",
         size=13, color=DIM)


def d_migration(ax):
    steps = [("EXPAND", CREAM), ("DUAL-\nWRITE", CREAM), ("BACK-\nFILL", ORANGE2),
             ("SWITCH\nREADS", ORANGE2), ("CONTRACT", ORANGE)]
    x = 6.5
    w = 18.5
    gap = 3.0
    ys = 22
    for i, (name, col) in enumerate(steps):
        box(ax, x, ys, w, 15, color=col, fill=col)
        text(ax, x + w / 2, ys + 7.5, name, size=14.5, color=col, font=HEAD,
             weight="bold")
        if i < len(steps) - 1:
            arrow(ax, x + w + 0.2, ys + 7.5, x + w + gap - 0.2, ys + 7.5)
        x += w + gap
    text(ax, 60, 14, "every step ships & rolls back on its own — no maintenance window",
         size=13, color=DIM)


def d_gdpr(ax):
    box(ax, 8, 24, 24, 16, color=CREAM, fill=CREAM)
    text(ax, 20, 34, "US SaaS", size=17, color=CREAM, font=HEAD, weight="bold")
    text(ax, 20, 28.5, "(processor)", size=12, color=DIM)
    box(ax, 48, 25, 24, 14, color=ORANGE, fill=ORANGE)
    text(ax, 60, 34.5, "SCCs / DPF", size=15, color=ORANGE, font=HEAD, weight="bold")
    text(ax, 60, 29, "+ DPA", size=13, color=ORANGE2)
    box(ax, 88, 24, 24, 16, color=ORANGE2, fill=ORANGE2)
    text(ax, 100, 34, "EU / UK", size=17, color=ORANGE2, font=HEAD, weight="bold")
    text(ax, 100, 28.5, "data subjects", size=12, color=DIM)
    arrow(ax, 32.2, 32, 47.8, 32)
    arrow(ax, 72.2, 32, 87.8, 32)
    text(ax, 60, 16, "rights:  access  •  delete  •  correct  •  72h breach clock",
         size=13, color=DIM)


def d_llmcost(ax):
    bars = [("RAW", 92, RED), ("+ cache prefix", 64, ORANGE2),
            ("+ route models", 40, ORANGE), ("+ trim context", 26, GREEN)]
    y = 36
    for name, val, col in bars:
        box(ax, 8, y, val * 0.9, 5.4, color=col, fill=col, lw=2.2)
        text(ax, 8 + val * 0.9 + 2.5, y + 2.7, name, size=12.5, color=col,
             font=BODY, ha="left")
        y -= 8.2
    text(ax, 8, 9, "$ per request", size=13, color=DIM, ha="left")
    arrow(ax, 86, 39, 86, 12, color=GREEN, lw=2.4)
    text(ax, 90, 25, "same\nquality", size=13, color=GREEN, font=HEAD, ha="left")


def d_dr(ax):
    # timeline
    ax.plot([10, 110], [30, 30], color=CREAM, lw=2.6, zorder=2)
    ax.add_patch(Circle((60, 30), 1.6, facecolor=RED, edgecolor=RED, zorder=4))
    text(ax, 60, 36, "DISASTER", size=14, color=RED, font=HEAD, weight="bold")
    # RPO (left, data loss)
    ax.plot([44, 60], [24, 24], color=ORANGE2, lw=2.4, zorder=3)
    text(ax, 52, 20.5, "RPO", size=14, color=ORANGE2, font=HEAD, weight="bold")
    text(ax, 52, 16.5, "data you can lose", size=11.5, color=DIM)
    # RTO (right, downtime)
    ax.plot([60, 86], [24, 24], color=ORANGE, lw=2.4, zorder=3)
    text(ax, 73, 20.5, "RTO", size=14, color=ORANGE, font=HEAD, weight="bold")
    text(ax, 73, 16.5, "time to recover", size=11.5, color=DIM)
    box(ax, 90, 25, 18, 10, color=GREEN, fill=GREEN, lw=2.2)
    text(ax, 99, 30, "RESTORED", size=12.5, color=GREEN, font=HEAD, weight="bold")
    text(ax, 60, 10, "a number you've actually restored — not one you're hoping for",
         size=13, color=DIM)


TOPICS = [
    dict(slug="multi-tenant-saas-architecture", n=16,
         kicker="ENGINEERING", t1="Multi-Tenant SaaS:", t2="Pooled · Bridge · Siloed",
         li1="3 ways to isolate", li2="your tenants", draw=d_multitenant),
    dict(slug="zero-downtime-database-migrations", n=17,
         kicker="ENGINEERING", t1="Zero-Downtime", t2="DB Migrations",
         li1="Change the DB live.", li2="No maintenance window.", draw=d_migration),
    dict(slug="gdpr-for-us-saas-uk-eu", n=18,
         kicker="SECURITY & COMPLIANCE", t1="GDPR for US SaaS", t2="Selling into UK & EU",
         li1="What you actually", li2="have to do", draw=d_gdpr),
    dict(slug="llm-cost-control", n=19,
         kicker="AI", t1="LLM Cost Control", t2="Cut the bill, keep quality",
         li1="Cut your AI bill", li2="without cutting quality", draw=d_llmcost),
    dict(slug="disaster-recovery-rto-rpo-saas", n=20,
         kicker="CLOUD", t1="Disaster Recovery", t2="RTO / RPO you can hit",
         li1="Set RTO/RPO", li2="you can actually hit", draw=d_dr),
]


def render():
    os.makedirs(HERO_DIR, exist_ok=True)
    os.makedirs(LI_DIR, exist_ok=True)
    for tp in TOPICS:
        # website hero
        fig, ax = new_fig()
        title_block(ax, tp["kicker"], tp["t1"], tp["t2"])
        tp["draw"](ax)
        brand(ax)
        save(fig, os.path.join(HERO_DIR, tp["slug"] + ".png"))
        # linkedin card (same diagram, punchier headline)
        fig, ax = new_fig()
        title_block(ax, tp["kicker"], tp["li1"], tp["li2"])
        tp["draw"](ax)
        brand(ax)
        save(fig, os.path.join(LI_DIR, f"li-{tp['n']}-{tp['slug']}.png"))


if __name__ == "__main__":
    render()
